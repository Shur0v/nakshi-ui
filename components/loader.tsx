import React, { useEffect, useState, useRef, useMemo } from 'react';
import gsap from 'gsap';

const Loader: React.FC = () => {
	const [progress, setProgress] = useState(0);
	const [lerpProgress, setLerpProgress] = useState(0);
	const [isDone, setIsDone] = useState(false);
	const [shouldRender, setShouldRender] = useState(true);
	const animFrameRef = useRef<number | null>(null);
	const startTimeRef = useRef<number>(Date.now());
	const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

	// ── Configuration ────────────────────────────────────────────────
	const LOGO_SRC = "/Nakshi-loading-logo.svg";
	const ASPECT_RATIO = 124.43 / 261.83;
	const CONTAINER_WIDTH = 320;
	const CONTAINER_HEIGHT = CONTAINER_WIDTH * ASPECT_RATIO;

	// Signature Nakshi Palette
	const COLORS = ['#BE1E2D', '#1A2F44', '#F29259', '#215328', '#6A152C'];

	// 1. Precise Progress Tracking (Preserved logic)
	useEffect(() => {
		const update = () => {
			const elapsed = Date.now() - startTimeRef.current;
			const resources = performance.getEntriesByType('resource');
			const loaded = resources.length;

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
					return prev + 1.5;
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

	// 2. Smooth Lerp Loop (Very Much Smooth)
	useEffect(() => {
		let active = true;
		const lerpLoop = () => {
			if (!active) return;
			setLerpProgress(prev => {
				const diff = progress - prev;
				const next = prev + diff * 0.08;
				if (Math.abs(diff) < 0.01) return progress;
				return next;
			});
			requestAnimationFrame(lerpLoop);
		};
		requestAnimationFrame(lerpLoop);
		return () => { active = false; };
	}, [progress]);

	// 3. Liquid Gooey Physics Blobs
	const blobs = useMemo(() => {
		return Array.from({ length: 45 }).map((_, i) => ({
			id: i,
			color: COLORS[i % COLORS.length],
			size: 60 + Math.random() * 80,
			// Start scattered outside or flowing in
			startX: (Math.random() - 0.5) * 600,
			startY: (Math.random() - 0.5) * 400,
			// Targets for the liquid "pull" towards the SVG paths
			targetX: (Math.random() - 0.5) * 200,
			targetY: (Math.random() - 0.5) * 100,
			speed: 0.5 + Math.random() * 1.5,
		}));
	}, []);

	// GSAP Continuous Swirl
	useEffect(() => {
		blobsRef.current.forEach((blob) => {
			if (!blob) return;
			gsap.to(blob, {
				x: `+=${Math.random() * 60 - 30}`,
				y: `+=${Math.random() * 60 - 30}`,
				duration: 3 + Math.random() * 3,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut"
			});
		});
	}, []);

	if (!shouldRender) return null;

	const assembly = Math.min(1, lerpProgress / 100);
	const invAssembly = 1 - assembly;

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
				clipPath: isDone ? 'circle(0% at 50% 50%)' : 'circle(150% at 50% 50%)',
				opacity: isDone ? 0 : 1,
				transition: 'clip-path 1.4s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.8s ease 0.4s',
			}}
		>
			{/* ────── PREMIUM TOP PROGRESS BAR (UNCHANGED) ────── */}
			{!isDone && (
				<div style={{
					position: 'absolute', top: 0, left: 0, width: '100%', height: '35px',
					background: 'rgba(255,255,255,0.01)', borderBottom: '1px solid rgba(0,0,0,0.03)',
					zIndex: 10000, overflow: 'hidden', display: 'flex', alignItems: 'center',
					opacity: isDone ? 0 : 1, transition: 'opacity 0.8s ease'
				}}>
					<div style={{
						position: 'absolute', top: 0, left: 0, height: '100%', width: `${lerpProgress}%`,
						background: 'linear-gradient(90deg, #6a152c 0%, #a41e41 100%)', boxShadow: '0 0 25px rgba(106, 21, 44, 0.3)',
						transition: 'width 0.2s cubic-bezier(0.1, 0, 0, 1)'
					}} />
					<div style={{
						position: 'absolute', top: 0, left: 0, width: '100%', height: '50%',
						background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
						pointerEvents: 'none'
					}} />
					<div style={{
						position: 'relative', marginLeft: 'auto', marginRight: '24px', fontSize: '15px',
						fontWeight: 900, color: '#1a2f44', fontFamily: 'Inter, sans-serif', zIndex: 10, letterSpacing: '-0.2px'
					}}>
						{Math.round(lerpProgress)}%
					</div>
					<div style={{
						position: 'absolute', left: 0, top: 0, width: '100%', height: '100%',
						display: 'flex', padding: '0 12px', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'none'
					}}>
						{Array.from({ length: 40 }).map((_, i) => (
							<div key={i} style={{
								width: '1px', height: '6px',
								background: (i / 40 * 100) < lerpProgress ? 'rgba(255,255,255,0.2)' : 'rgba(26, 47, 68, 0.05)',
							}} />
						))}
					</div>
				</div>
			)}

			{/* 🌊 LIQUID COMPOSITING LOGO AREA 🌊 */}
			<div
				style={{
					position: 'relative',
					width: CONTAINER_WIDTH,
					height: CONTAINER_HEIGHT,
					transform: isDone ? 'scale(0.8) translateY(-20px)' : 'scale(1)',
					transition: 'transform 1.2s cubic-bezier(0.85, 0, 0.15, 1)',
				}}
			>
				{/* 1. Silhouette Layer (Empty Vessel) */}
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundImage: `url(${LOGO_SRC})`,
						backgroundSize: 'contain',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						opacity: 0.1,
						filter: 'grayscale(100%) blur(1px)',
					}}
				/>

				{/* 2. The Liquid Container - Constrained by Logo Shape */}
				<div
					style={{
						position: 'absolute',
						inset: 0,
						// CRITICAL: The Liquid is MASKED by the SVG shape
						maskImage: `url(${LOGO_SRC})`,
						WebkitMaskImage: `url(${LOGO_SRC})`,
						maskSize: 'contain',
						maskRepeat: 'no-repeat',
						maskPosition: 'center',
						overflow: 'hidden',
						opacity: lerpProgress >= 99 ? 0 : 1,
						transition: 'opacity 0.6s ease',
						filter: 'url(#goo)', // Real liquid melting effect
					}}
				>
					{/* Flowing Colored Liquid Drops */}
					{blobs.map((b, i) => {
						// Logic: Drops move from scattered points TO the design paths
						const currentX = b.startX * invAssembly + b.targetX * assembly;
						const currentY = b.startY * invAssembly + b.targetY * assembly;
						const scale = 0.8 + (assembly * 0.7);

						return (
							<div
								key={b.id}
								ref={el => blobsRef.current[i] = el}
								style={{
									position: 'absolute',
									left: '50%',
									top: '50%',
									width: b.size,
									height: b.size,
									backgroundColor: b.color,
									borderRadius: '50%',
									transform: `translate(-50%, -50%) translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`,
									opacity: 0.9,
									mixBlendMode: 'multiply', // High-end color mixing
									filter: 'blur(4px)',
									willChange: 'transform',
								}}
							/>
						);
					})}
				</div>

				{/* 3. Final High-Fidelity Reveal at 99% */}
				<div
					style={{
						position: 'absolute',
						inset: 0,
						backgroundImage: `url(${LOGO_SRC})`,
						backgroundSize: 'contain',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						opacity: lerpProgress >= 99 ? 1 : 0,
						transition: 'opacity 1s cubic-bezier(0.2, 0, 0.4, 1), transform 0.8s ease',
						zIndex: 5,
						transform: `scale(${lerpProgress >= 99 ? 1 : 0.96})`,
					}}
				/>
			</div>

			{/* Subtle Assembling Hint */}
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
					fontFamily: 'Inter, sans-serif'
				}}>
					Refining Experience
				</div>
			)}

			{/* ── SVG LIQUID FILTER ── */}
			<svg style={{ position: 'absolute', width: 0, height: 0 }}>
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
						<feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>
			</svg>
		</div>
	);
};

export default Loader;