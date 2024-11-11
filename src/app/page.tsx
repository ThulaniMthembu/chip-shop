'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronRight, ChevronDown, Star, Pause, Play } from 'lucide-react';

const testimonials = [
	{
		name: 'D. Cape',
		source: 'Google Reviews',
		quote:
			'Best fish and chips in Johannesburg! The quality and taste is unmatched.',
		fullQuote:
			"We bought a Half AK on Friday night yes we waited an hour because we understand fresh food takes time. I must say the AK was so delicious I kept a piece for Saturday morning, my daughter said it won't taste the same. I proved her wrong that piece was so delicious the next day as if it was freshly made. Well done MO. I will always support you.",
		rating: 5,
	},
	{
		name: 'T. Mojalefa',
		source: 'Facebook',
		quote: 'Amazing food and excellent service!',
		fullQuote:
			'I have known this Place since 2004....last time I was here was +5yrs ago....Amazing Fresh food as always...It was great to catch up with My brother Mohamed .God sent Me there to hear and receive a special message from you my Brother...Alhamdulillah.',
		rating: 5,
	},
	{
		name: 'M. Thapelo',
		source: 'Instagram',
		quote: 'The best in town!',
		fullQuote:
			"Their portions are generous and the quality is consistent. I especially love their shawarmas and burgers. The fact that they're Halaal certified makes it even better.",
		rating: 5,
	},
	{
		name: 'Sarah K.',
		source: 'Facebook',
		quote: 'Fresh ingredients and fantastic flavors!',
		fullQuote:
			'You can taste the quality in every bite. Their fish is always fresh, and the batter is perfectly crispy. The chips are consistently good, and their sauces are amazing.',
		rating: 5,
	},
	{
		name: 'M. Sarah',
		source: 'Google Reviews',
		quote: 'Consistent quality!',
		fullQuote:
			'Some restaurants were hectic, like we were told to wait for an hour for an order. However, some restaurants were very quick..everything else was perfect.',
		rating: 5,
	},
	{
		name: 'M. Matona',
		source: 'Google Reviews',
		quote: 'Perfect service, food is great!',
		fullQuote:
			"The Chip Shop is the best fast food place you can ever visit. Went there yesterday, because I saw the shop while browsing on TikTok so decided to try it out. Ordered fish and chips, the portions are good. The owner is very friendly, the shop is clean and the service was stellar, didn't even wait that long for the food. I'm definitely coming back to try other dishes on the menu.",
		rating: 5,
	},
];

export default function Home() {
	const { scrollY } = useScroll();
	const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
	const [imageError, setImageError] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);
	const aboutRef = useRef(null);
	const featuredDishesRef = useRef(null);
	const testimonialsRef = useRef(null);
	const uberEatsRef = useRef(null);
	const fullWidthImageSectionRef = useRef(null);
	const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
	const isFeaturedDishesInView = useInView(featuredDishesRef, {
		once: true,
		amount: 0.3,
	});
	const isTestimonialsInView = useInView(testimonialsRef, {
		once: true,
		amount: 0.3,
	});
	const isUberEatsInView = useInView(uberEatsRef, { once: true, amount: 0.3 });
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);

	const { scrollYProgress: fullWidthImageScrollProgress } = useScroll({
		target: fullWidthImageSectionRef,
		offset: ['start end', 'end start'],
	});

	const fullWidthImageOpacity = useTransform(
		fullWidthImageScrollProgress,
		[0, 0.5],
		[0, 1]
	);
	const fullWidthImageY = useTransform(
		fullWidthImageScrollProgress,
		[0, 0.5],
		[50, 0]
	);

	useEffect(() => {
		let interval: NodeJS.Timeout | null = null;
		if (isPlaying) {
			interval = setInterval(() => {
				setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
			}, 5000);
		}
		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isPlaying]);

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			{/* Hero Section */}
			<section className='relative flex min-h-screen items-center justify-center overflow-hidden'>
				<motion.div
					className='absolute inset-0 bg-cover bg-center bg-no-repeat'
					style={{
						backgroundImage: "url('/shop/home-banner.jpg')",
						backgroundPosition: 'center 30%',
						y: backgroundY,
					}}
				>
					<div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70' />
				</motion.div>

				<div className='container relative z-10 mx-auto px-4'>
					<div className='max-w-4xl'>
						<motion.h1
							className='text-[#ffd85c] text-3xl sm:text-4xl md:text-[50px] font-extrabold uppercase tracking-wider break-words'
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							The Chip Shop
						</motion.h1>
						<motion.p
							className='mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-[46px] font-bold uppercase tracking-tight text-white leading-tight sm:leading-tight break-words'
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							15 Years of Ormonde&apos;s Freshest Halaal Flavors!
						</motion.p>
						<motion.div
							className='mt-6 sm:mt-8'
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Link
								href='/menu'
								className='bg-red-600 text-white hover:text-black transition-all duration-300 w-full sm:w-[186.29px] h-[55.55px] text-base font-semibold rounded-none flex items-center justify-center'
								style={{ '--hover-bg': '#ffd85c' } as React.CSSProperties}
							>
								<span className='hover:bg-[var(--hover-bg)] hover:text-black w-full h-full flex items-center justify-center'>
									View Our Menu
								</span>
							</Link>
						</motion.div>
					</div>
				</div>

				<motion.div
					className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
				>
					<ChevronDown className='w-8 h-8 text-white' />
				</motion.div>
			</section>

			{/* Full-width Image Section */}
			<section
				ref={fullWidthImageSectionRef}
				className='py-16 md:py-24 bg-gray-100'
				aria-label='Featured image'
			>
				<div className='container mx-auto px-4'>
					<motion.div
						className='relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl'
						style={{ opacity: fullWidthImageOpacity, y: fullWidthImageY }}
					>
						{imageError ? (
							<div className='absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 p-4 text-center'>
								<p>
									We&apos;re sorry, the image couldn&apos;t be loaded. Please
									try refreshing the page.
								</p>
							</div>
						) : (
							<Image
								src='/filler/portrait-person-holding-fast-food-burger.jpg'
								alt='Person holding a fast food burger'
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
								style={{
									objectFit: 'cover',
									objectPosition: 'center 25%',
								}}
								quality={100}
								onError={() => setImageError(true)}
								onLoad={() => setImageLoaded(true)}
								priority
								className={`transition-opacity duration-500 ${
									imageLoaded ? 'opacity-100' : 'opacity-0'
								}`}
							/>
						)}
						<div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
							<h2 className='text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg'>
              Delicious Food, Made Fresh Daily.
							</h2>
						</div>
					</motion.div>
				</div>
			</section>

			{/* About Us Section */}
			<motion.section
				ref={aboutRef}
				id='about'
				className='py-12 sm:py-16 bg-white overflow-hidden'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: isAboutInView ? 1 : 0, y: isAboutInView ? 0 : 50 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-center mb-8'>
						About The Chip Shop
					</h2>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='w-full md:w-1/2 mb-8 md:mb-0'>
							<motion.div
								className='relative w-full max-w-[300px] sm:max-w-[400px] mx-auto rounded-lg shadow-lg'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{
									opacity: isAboutInView ? 1 : 0,
									scale: isAboutInView ? 1 : 0.8,
								}}
								transition={{ duration: 0.8, delay: 0.2 }}
							>
								<div className='bg-gradient-to-br from-yellow-400 to-red-600 p-2 rounded-lg'>
									<div className='relative aspect-square bg-white rounded-lg overflow-hidden'>
										<Image
											src='/logo-image.png'
											alt='The Chip Shop Logo'
											fill
											sizes='(max-width: 768px) 300px, 400px'
											style={{ objectFit: 'contain' }}
										/>
									</div>
								</div>
							</motion.div>
						</div>
						<motion.div
							className='w-full md:w-1/2 md:pl-8'
							initial={{ opacity: 0, x: 50 }}
							animate={{
								opacity: isAboutInView ? 1 : 0,
								x: isAboutInView ? 0 : 50,
							}}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<p className='text-base sm:text-lg mb-4'>
								For 15 years, The Chip Shop has been serving up Ormonde&apos;s
								finest Halaal fish and chips. With a commitment to quality,
								freshness, and traditional flavors, we&apos;ve become a beloved
								local institution.
							</p>
							<p className='text-base sm:text-lg mb-4'>
								Our hand-cut chips, crispy golden batter, and sustainably
								sourced fish are all crafted with care. Each meal is prepared to
								perfection using secret recipes that make every bite
								unforgettable.
							</p>
							<p className='text-base sm:text-lg mb-4'>
								Located in Ormonde, we&apos;re proud to be one of the
								area&apos;s pioneering fast-food establishments, known for
								maintaining high standards of freshness and quality. Our Halaal
								certification and spotless kitchen reflect our dedication to
								excellence. Experience the best fish and chips in town—where
								every meal is made with passion and served with pride.
							</p>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Featured Menu Items */}
			<motion.section
				ref={featuredDishesRef}
				className='py-12 sm:py-16 bg-gray-100'
				initial={{ opacity: 0, y: 50 }}
				animate={{
					opacity: isFeaturedDishesInView ? 1 : 0,
					y: isFeaturedDishesInView ? 0 : 50,
				}}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12'>
						Featured Dishes
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
						{[
							{
								name: 'Fish & Chips',
								description:
									'Our classic beer-battered fish served with crispy chips.',
								price: 'From R75.00',
								image: '/featured/fish-n-chips.png',
							},
							{
								name: 'Shawarma',
								description:
									'Tender, spiced meat wrapped in a warm pita with fresh veggies.',
								price: 'R105.00',
								image: '/featured/shawarma.png',
							},
							{
								name: 'Burger',
								description:
									'Juicy beef patty with all the fixings on a toasted bun.',
								price: 'From R105',
								image: '/featured/burger.png',
							},
							{
								name: 'Dagwood',
								description:
									'Towering sandwich packed with various meats, cheeses, and veggies.',
								price: 'From R120.00',
								image: '/featured/dagwood.png',
							},
						].map((item, index) => (
							<motion.div
								key={index}
								className='relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg group'
								initial={{ opacity: 0, y: 50 }}
								animate={{
									opacity: isFeaturedDishesInView ? 1 : 0,
									y: isFeaturedDishesInView ? 0 : 50,
								}}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Image
									src={item.image}
									alt={item.name}
									fill
									sizes='(max-width: 640px) 100vw, 50vw'
									style={{ objectFit: 'cover' }}
									className='transition-transform duration-300 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent' />
								<div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white'>
									<h3 className='text-xl sm:text-2xl font-bold mb-2'>
										{item.name}
									</h3>
									<p className='text-sm text-gray-200 mb-2 sm:mb-3 line-clamp-2'>
										{item.description}
									</p>
									<div className='flex items-baseline'>
										<span className='text-lg sm:text-xl font-bold'>
											{item.price}
										</span>
									</div>
								</div>
								<Link
									href='/menu'
									className='absolute inset-0 z-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
									aria-label={`View menu details for ${item.name}`}
								/>
							</motion.div>
						))}
					</div>
					<motion.div
						className='text-center mt-8 sm:mt-12'
						initial={{ opacity: 0, y: 20 }}
						animate={{
							opacity: isFeaturedDishesInView ? 1 : 0,
							y: isFeaturedDishesInView ? 0 : 20,
						}}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<Link
							href='/menu'
							className='bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 inline-flex items-center gap-2 text-lg font-semibold'
						>
							View Full Menu
							<ChevronRight className='w-5 h-5 sm:w-6 sm:h-6' />
						</Link>
					</motion.div>
				</div>
			</motion.section>

			{/* Testimonials Section */}
			<motion.section
				ref={testimonialsRef}
				className='py-12 sm:py-16 bg-white overflow-hidden'
				initial={{ opacity: 0, y: 50 }}
				animate={{
					opacity: isTestimonialsInView ? 1 : 0,
					y: isTestimonialsInView ? 0 : 50,
				}}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12'>
						What Our Customers Say
					</h2>
					<div className='max-w-4xl mx-auto'>
						<motion.div
							key={currentTestimonial}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
							className='bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-8 text-white shadow-lg'
						>
							<div className='mb-6'>
								<h3 className='text-2xl font-bold'>
									{testimonials[currentTestimonial].name}
								</h3>
								<p className='text-sm text-white/80'>
									{testimonials[currentTestimonial].source}
								</p>
							</div>
							<blockquote>
								<p className='text-xl font-semibold mb-6'>
									&ldquo;{testimonials[currentTestimonial].quote}&rdquo;
								</p>
								<p className='text-sm leading-relaxed'>
									&ldquo;{testimonials[currentTestimonial].fullQuote}&rdquo;
								</p>
							</blockquote>
							<div className='mt-6 flex justify-center gap-1'>
								{[...Array(testimonials[currentTestimonial].rating)].map(
									(_, i) => (
										<Star
											key={i}
											className='w-6 h-6 fill-yellow-400 text-yellow-400'
										/>
									)
								)}
							</div>
						</motion.div>
						<div className='mt-6 flex justify-center'>
							<button
								onClick={togglePlayPause}
								className='bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300'
								aria-label={
									isPlaying
										? 'Pause testimonial rotation'
										: 'Play testimonial rotation'
								}
							>
								{isPlaying ? (
									<Pause className='w-6 h-6' />
								) : (
									<Play className='w-6 h-6' />
								)}
							</button>
						</div>
					</div>
				</div>
			</motion.section>

			{/* Uber Eats Section */}
			<motion.section
				ref={uberEatsRef}
				className='relative py-32 sm:py-40 md:py-48 overflow-hidden bg-black/20'
				initial={{ opacity: 0, y: 50 }}
				animate={{
					opacity: isUberEatsInView ? 1 : 0,
					y: isUberEatsInView ? 0 : 50,
				}}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<div className='absolute inset-0 z-0'>
					<Image
						src='/filler/eats.jpg'
						alt='Uber Eats Background'
						fill
						style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
						quality={100}
						priority
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60' />
				</div>
				<div className='container relative z-10 mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center text-white'>
						<motion.div
							className='relative z-20 bg-black/40 p-8 sm:p-12 rounded-2xl shadow-2xl'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<motion.h2
								className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: isUberEatsInView ? 1 : 0,
									y: isUberEatsInView ? 0 : 20,
								}}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								The Chip Shop Now on Uber Eats!
							</motion.h2>
							<motion.p
								className='text-xl mb-8'
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: isUberEatsInView ? 1 : 0,
									y: isUberEatsInView ? 0 : 20,
								}}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								Enjoy our delicious Halaal fish and chips, delivered right to
								your doorstep.
							</motion.p>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-left'>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{
										opacity: isUberEatsInView ? 1 : 0,
										x: isUberEatsInView ? 0 : -20,
									}}
									transition={{ duration: 0.5, delay: 0.5 }}
								>
									<h3 className='text-2xl font-semibold mb-4'>Our Top Picks</h3>
									<ul className='space-y-2'>
										<li>• Classic Fish & Chips</li>
										<li>• Grilled Hake</li>
										<li>• Calamari Rings</li>
										<li>• Chip Roll Special</li>
									</ul>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: 20 }}
									animate={{
										opacity: isUberEatsInView ? 1 : 0,
										x: isUberEatsInView ? 0 : 20,
									}}
									transition={{ duration: 0.5, delay: 0.6 }}
								>
									<h3 className='text-2xl font-semibold mb-4'>
										Why Choose Us?
									</h3>
									<ul className='space-y-2'>
										<li>• Halaal Certified</li>
										<li>• Fresh, Quality Ingredients</li>
										<li>• Fast Delivery</li>
										<li>• Great Value for Money</li>
									</ul>
								</motion.div>
							</div>
							<motion.a
								href='https://www.ubereats.com/za/store/the-chip-shop-est-1999-halaal/JiPcgoA8UE6cbDsQkEacwQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlRpZmZhbmkncyUyMENlbnRyZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpFOFI3ZXlFSmxSNFJvUzZKWlJtTnoyQSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMjYuMjQ2ODkwNiUyQyUyMmxvbmdpdHVkZSUyMiUzQTI3Ljk5ODUyMTIlN0Q%3D&ps=1'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg group text-lg font-semibold'
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: isUberEatsInView ? 1 : 0,
									y: isUberEatsInView ? 0 : 20,
								}}
								transition={{ duration: 0.5, delay: 0.7 }}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='32'
									height='32'
									viewBox='0 0 50 50'
									className='mr-3 group-hover:scale-110 transition-transform duration-300'
								>
									<path d='M 14 4 C 8.486 4 4 8.486 4 14 L 4 36 C 4 41.514 8.486 46 14 46 L 36 46 C 41.514 46 46 41.514 46 36 L 46 14 C 46 8.486 41.514 4 36 4 L 14 4 z M 11.667969 15 L 13.023438 15 L 13.023438 20.464844 C 13.023438 21.896844 13.944125 22.832031 15.203125 22.832031 C 16.443125 22.832031 17.40625 21.880078 17.40625 20.455078 L 17.40625 15 L 18.736328 15 L 18.736328 23.888672 L 17.421875 23.888672 L 17.421875 23.041016 C 16.800875 23.683016 15.942781 24.042109 15.050781 24.037109 C 13.138781 24.037109 11.667969 22.643297 11.667969 20.529297 L 11.667969 15 z M 19.933594 15 L 21.216797 15 L 21.216797 18.189453 C 21.826797 17.572453 22.656437 17.227562 23.523438 17.226562 L 23.527344 17.226562 C 23.575344 17.225562 23.624875 17.225562 23.671875 17.226562 C 25.553875 17.266562 27.047813 18.823078 27.007812 20.705078 C 26.968813 22.587078 25.409344 24.081016 23.527344 24.041016 C 22.653344 24.035016 21.816172 23.682547 21.201172 23.060547 L 21.201172 23.888672 L 19.933594 23.888672 L 19.933594 15 z M 30.929688 17.226562 C 32.802688 17.226562 34.1875 18.681953 34.1875 20.626953 L 34.189453 21.046875 L 28.896484 21.046875 C 29.054484 22.115875 29.968828 22.908062 31.048828 22.914062 C 31.794828 22.925062 32.497641 22.570844 32.931641 21.964844 L 33.863281 22.648438 C 33.207281 23.542437 32.158781 24.062016 31.050781 24.041016 C 29.093781 24.041016 27.59375 22.570953 27.59375 20.626953 L 27.59375 20.607422 C 27.58175 18.753422 29.074687 17.238563 30.929688 17.226562 z M 37.871094 17.316406 L 38.332031 17.316406 L 38.332031 18.511719 L 37.796875 18.513672 C 36.955875 18.513672 36.357422 19.171641 36.357422 20.181641 L 36.357422 23.888672 L 35.074219 23.888672 L 35.074219 17.363281 L 36.34375 17.363281 L 36.34375 18.160156 C 36.66275 17.622156 37.246094 17.299406 37.871094 17.316406 z M 30.912109 18.359375 C 29.948109 18.359375 29.152828 19.031344 28.923828 20.027344 L 32.886719 20.027344 C 32.671719 19.031344 31.877109 18.359375 30.912109 18.359375 z M 23.410156 18.373047 C 22.162156 18.379047 21.157109 19.396531 21.162109 20.644531 C 21.168109 21.892531 22.183641 22.897578 23.431641 22.892578 L 23.431641 22.886719 L 23.441406 22.886719 C 24.680406 22.885719 25.683641 21.879625 25.681641 20.640625 L 25.681641 20.621094 C 25.676641 19.375094 24.658156 18.368047 23.410156 18.373047 z M 11.806641 26.111328 L 18.037109 26.111328 L 18.037109 27.636719 L 13.490234 27.636719 L 13.490234 29.802734 L 17.910156 29.802734 L 17.910156 31.275391 L 13.490234 31.275391 L 13.490234 33.476562 L 18.037109 33.476562 L 18.037109 35 L 11.806641 35 L 11.806641 26.111328 z M 27.890625 26.572266 L 29.548828 26.572266 L 29.548828 28.433594 L 31.40625 28.433594 L 31.40625 29.916016 L 29.548828 29.916016 L 29.548828 33.003906 C 29.548828 33.352906 29.788969 33.519531 30.167969 33.519531 L 31.40625 33.519531 L 31.408203 35.003906 L 29.623047 35.003906 C 28.504047 35.003906 27.884766 34.307688 27.884766 33.429688 L 27.884766 29.917969 L 26.630859 29.917969 L 26.630859 28.433594 L 27.890625 28.433594 L 27.890625 26.572266 z M 34.949219 28.261719 C 36.943219 28.261719 37.927578 29.165203 38.017578 30.533203 L 36.369141 30.533203 C 36.217141 29.806203 35.635609 29.595703 34.849609 29.595703 C 34.123609 29.595703 33.730469 29.836469 33.730469 30.230469 C 33.730469 30.533469 33.986734 30.687844 34.802734 30.839844 L 36.210938 31.126953 C 37.540937 31.415953 38.175781 32.081609 38.175781 32.974609 C 38.173781 34.226609 37.101266 35.138672 35.197266 35.138672 C 33.140266 35.138672 32.127719 34.231234 31.886719 32.865234 L 33.542969 32.865234 C 33.753969 33.592234 34.299 33.802734 35.25 33.802734 C 36.008 33.802734 36.476562 33.545719 36.476562 33.136719 C 36.476562 32.879719 36.309453 32.713797 35.689453 32.591797 L 34.117188 32.228516 C 32.680188 31.926516 32.015625 31.305562 32.015625 30.351562 C 32.015625 28.972562 33.226219 28.261719 34.949219 28.261719 z M 22.175781 28.265625 C 22.939781 28.263625 23.679672 28.532391 24.263672 29.025391 L 24.263672 28.433594 L 25.914062 28.433594 L 25.914062 35 L 24.261719 35 L 24.261719 34.378906 C 23.678719 34.871906 22.939781 35.141672 22.175781 35.138672 C 22.127781 35.139672 22.07825 35.139672 22.03125 35.138672 C 20.13325 35.098672 18.627969 33.526906 18.667969 31.628906 C 18.707969 29.730906 20.277781 28.225625 22.175781 28.265625 z M 22.267578 29.705078 C 21.163578 29.717078 20.278016 30.623563 20.291016 31.726562 C 20.303016 32.830562 21.2095 33.716125 22.3125 33.703125 L 22.308594 33.699219 L 22.330078 33.699219 C 23.421078 33.689219 24.297109 32.796078 24.287109 31.705078 L 24.287109 31.681641 C 24.275109 30.576641 23.370578 29.691078 22.267578 29.705078 z' />
								</svg>
								Order on Uber Eats
							</motion.a>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
