import React, { useEffect, useState, useRef, useMemo } from 'react';

const Loader: React.FC = () => {
	const [progress, setProgress] = useState(0);
	const [lerpProgress, setLerpProgress] = useState(0);
	const [isDone, setIsDone] = useState(false);
	const [shouldRender, setShouldRender] = useState(true);
	const animFrameRef = useRef<number | null>(null);
	const startTimeRef = useRef<number>(Date.now());

	// ── Configuration ────────────────────────────────────────────────
	const GRID_COLS = 12;
	const GRID_ROWS = 6;
	const LOGO_SRC = "/Nakshi-loading-logo.svg";
	const ASPECT_RATIO = 124.43 / 261.83;
	const CONTAINER_WIDTH = 320;
	const CONTAINER_HEIGHT = CONTAINER_WIDTH * ASPECT_RATIO;

	// 1. Precise Progress Tracking
	useEffect(() => {
		const update = () => {
			const elapsed = Date.now() - startTimeRef.current;
			const resources = performance.getEntriesByType('resource');
			const loaded = resources.length;

			// Aim for 90% via loading, fill rest on window load
			const resourcePct = Math.min((loaded / Math.max(loaded + 4, 12)) * 90, 90);
			const timePct = Math.min((elapsed / 6000) * 95, 95);

			setProgress(prev => Math.max(prev, Math.floor(Math.max(resourcePct, timePct))));

			if (progress < 95) {
				animFrameRef.current = requestAnimationFrame(update);
			}
		};
		animFrameRef.current = requestAnimationFrame(update);

		const handleLoad = () => {
			if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
			const finish = () => {
				setProgress(prev => {
					if (prev >= 100) {
						setIsDone(true);
						setTimeout(() => setShouldRender(false), 2000);
						return 100;
					}
					animFrameRef.current = requestAnimationFrame(finish);
					return prev + 1.5; // Slightly slower finish for elegance
				});
			};
			animFrameRef.current = requestAnimationFrame(finish);
		};

		if (document.readyState === 'complete') {
			setTimeout(handleLoad, 400);
		} else {
			window.addEventListener('load', handleLoad);
		}

		return () => {
			if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
			window.removeEventListener('load', handleLoad);
		};
	}, [progress]);

	// 2. Smooth Lerp Loop (The secret to "Very Much Smooth")
	useEffect(() => {
		let active = true;
		const lerpLoop = () => {
			if (!active) return;
			setLerpProgress(prev => {
				const diff = progress - prev;
				// Move 5% of the way each frame for buttery smooth non-linear motion
				const next = prev + diff * 0.08;
				if (Math.abs(diff) < 0.01) return progress;
				return next;
			});
			requestAnimationFrame(lerpLoop);
		};
		requestAnimationFrame(lerpLoop);
		return () => { active = false; };
	}, [progress]);

	// 3. Particle Generation
	const particles = useMemo(() => {
		const temp = [];
		for (let r = 0; r < GRID_ROWS; r++) {
			for (let c = 0; c < GRID_COLS; c++) {
				const angle = Math.random() * Math.PI * 2;
				const distance = 400 + Math.random() * 600;
				temp.push({
					id: `${r}-${c}`,
					row: r,
					col: c,
					startX: Math.cos(angle) * distance,
					startY: Math.sin(angle) * distance,
					startRot: (Math.random() - 0.5) * 1080, // multiple spins
					scale: 0.2 + Math.random() * 0.4,
				});
			}
		}
		return temp;
	}, []);

	if (!shouldRender) return null;

	const assembly = Math.min(1, lerpProgress / 100);
	const invAssembly = 1 - assembly;

	// Premium ease-out for particles
	const easeExp = 1 - Math.pow(1 - assembly, 4);

	return (
		<div
			style={{
				position: 'fixed',
				inset: 0,
				zIndex: 9999,
				background: '#ffffff',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				pointerEvents: isDone ? 'none' : 'all',
				overflow: 'hidden',
				// Circular collapse logic
				clipPath: isDone ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
				// Fades out opacity slowly near the end of the collapse
				opacity: isDone ? 0 : 1,
				transition: `
					clip-path 1.4s cubic-bezier(0.85, 0, 0.15, 1),
					opacity 1s cubic-bezier(0.65, 0, 0.35, 1) 0.4s
				`,
				willChange: 'clip-path, opacity',
			}}
		>
			{/* ────── PREMIUM TOP PROGRESS BAR ────── */}
			{!isDone && (
				<div style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '35px',
					background: 'rgba(255,255,255,0.05)', // Almost invisible track for better fill pop
					borderBottom: '1px solid rgba(0,0,0,0.03)',
					zIndex: 10000,
					overflow: 'hidden',
					display: 'flex',
					alignItems: 'center',
					opacity: isDone ? 0 : 1,
					transition: 'opacity 0.8s ease'
				}}>
					{/* Animated Fill - Strong Maroon Impact */}
					<div style={{
						position: 'absolute',
						top: 0,
						left: 0,
						height: '100%',
						width: `${lerpProgress}%`,
						background: 'linear-gradient(90deg, #6a152c 0%, #a41e41 100%)',
						boxShadow: '0 0 25px rgba(106, 21, 44, 0.4)',
						transition: 'width 0.2s cubic-bezier(0.1, 0, 0, 1)'
					}} />

					{/* Glossy Reflection for premium feel */}
					<div style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '50%',
						background: 'linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%)',
						pointerEvents: 'none'
					}} />

					{/* Percentage Label */}
					<div style={{
						position: 'relative',
						marginLeft: 'auto',
						marginRight: '24px',
						fontSize: '15px',
						fontWeight: 900,
						color: '#1a2f44', // Bold Navy
						fontFamily: 'Inter, sans-serif',
						zIndex: 10,
						letterSpacing: '-0.2px'
					}}>
						{Math.round(lerpProgress)}%
					</div>

					{/* Progress Indicator Grid */}
					<div style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						display: 'flex',
						padding: '0 12px',
						justifyContent: 'space-between',
						alignItems: 'center',
						pointerEvents: 'none'
					}}>
						{Array.from({ length: 40 }).map((_, i) => (
							<div key={i} style={{
								width: '1px',
								height: '6px',
								background: (i / 40 * 100) < lerpProgress ? 'rgba(255,255,255,0.2)' : 'rgba(26, 47, 68, 0.05)',
							}} />
						))}
					</div>
				</div>
			)}

			<div
				style={{
					position: 'relative',
					width: CONTAINER_WIDTH,
					height: CONTAINER_HEIGHT,
					perspective: '1200px',
					// Whole logo scales and rotates slightly as it vanishes
					transform: isDone ? 'scale(0.4) rotate(10deg)' : 'scale(1) rotate(0deg)',
					opacity: isDone ? 0 : 1,
					transition: 'transform 1.2s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.8s ease',
					willChange: 'transform, opacity'
				}}
			>
				{particles.map((p) => {
					const w = CONTAINER_WIDTH / GRID_COLS;
					const h = CONTAINER_HEIGHT / GRID_ROWS;

					// Assembly movement based on the exponential ease
					const tx = p.startX * (1 - easeExp);
					const ty = p.startY * (1 - easeExp);
					const rotate = p.startRot * (1 - easeExp);
					const scale = p.scale + (1 - p.scale) * easeExp;
					const opacity = Math.min(1, easeExp * 4); // Fast fade in

					return (
						<div
							key={p.id}
							style={{
								position: 'absolute',
								top: p.row * h,
								left: p.col * w,
								width: w + 0.6,
								height: h + 0.6,
								backgroundImage: `url(${LOGO_SRC})`,
								backgroundSize: `${CONTAINER_WIDTH}px ${CONTAINER_HEIGHT}px`,
								backgroundPosition: `-${p.col * w}px -${p.row * h}px`,
								backgroundRepeat: 'no-repeat',
								transform: `translate3d(${tx}px, ${ty}px, 0) rotate(${rotate}deg) scale(${scale})`,
								opacity: opacity,
								willChange: 'transform, opacity'
							}}
						/>
					);
				})}
			</div>

			{/* Subtle "Assembling" hint */}
			{!isDone && (
				<div style={{
					position: 'absolute',
					bottom: '12%',
					fontSize: '11px',
					letterSpacing: '5px',
					color: '#BE1E2D',
					opacity: assembly < 0.2 ? 0 : (1 - assembly),
					transition: 'opacity 0.6s ease',
					textTransform: 'uppercase',
					fontWeight: 500,
					fontFamily: 'sans-serif'
				}}>
					Perfecting Your Experience
				</div>
			)}
		</div>
	);
};

export default Loader;