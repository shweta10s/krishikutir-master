import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const blogPosts = [
     {
    date: 'August 21, 2025',
    title: 'How to Grow Microgreens at Home – A Simple DIY Guide',
    imgSrc: '/background/blog-3.jpg',
    postId: '04',
    slug: '/blog/04', 
  },
  {
    date: 'August 21, 2025',
    title: 'Top Benefits of Microgreens in Daily Life – The Superfood You Need',
    imgSrc: '/background/blog-2.jpg',
    postId: '01',
    slug: '/blog/01',
  },
  {
    date: 'August 21, 2025',
    title: 'Microgreens: Nature’s Tiny Superfood for a Healthier You',
    imgSrc: '/background/blog-1.jpg',
    postId: '02',
    slug: '/blog/02',
  },
];

export default function Blog03() {
  // Recommended posts exclude current blog (postId '03')
  const recommendedPosts = blogPosts.filter(post => post.postId !== '03');

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Head>
        <title>How to Grow Microgreens at Home – A Simple DIY Guide</title>
        <meta
          name="description"
          content="Learn how to grow microgreens at home with our simple DIY guide. Enjoy fresh, healthy greens packed with nutrients in just a couple of weeks."
        />
        <meta
          name="keywords"
          content="Grow microgreens at home, Microgreens DIY guide, Healthy microgreens, Home gardening, Microgreens cultivation"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/blog/how-to-grow-microgreens-at-home"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-green-50 py-10 shadow-md">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4d7c0f] mb-4">
            How to Grow Microgreens at Home – A Simple DIY Guide
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-gray-700">
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto text-center">
            Microgreens are becoming a superfood trend worldwide, and for good reason. These tiny greens are packed with vitamins, minerals, and antioxidants, making them a powerhouse addition to your diet.
          </p>
        {/* Featured Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg md:h-[280px] max-md:h-[160px]">
          <Image
            src="/background/blog-3.jpg"
            alt="Grow microgreens at home"
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <section className="space-y-6">
          <p>
            The best part? You don’t need a farm or a garden to grow them. With this DIY microgreens guide, you can grow fresh, healthy greens right at home in just a couple of weeks.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🥬 What Are Microgreens?</h2>
          <p>
            Microgreens are young vegetable plants harvested just 7–14 days after germination. Unlike sprouts, they grow in soil or growing medium and are harvested above the roots. They’re richer in nutrients, more flavorful, and incredibly easy to grow at home.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🪴 What You’ll Need to Grow Microgreens at Home</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Microgreen Seeds: Broccoli, radish, mustard, sunflower, basil, arugula, beetroot, etc.</li>
            <li>Shallow Tray or Container: 1–2 inches deep, with drainage holes.</li>
            <li>Growing Medium: Cocopeat, potting soil, or soilless mix (vermiculite/perlite).</li>
            <li>Spray Bottle: For gentle watering.</li>
            <li>Light Source: Sunny windowsill or LED grow light.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌿 DIY Microgreens – Step-by-Step Growing Guide</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Prepare the Tray:</strong> Fill with 1–1.5 inches of growing medium. Moisten it with a spray bottle.</li>
            <li><strong>Sow the Seeds:</strong> Scatter seeds evenly. Press gently into the medium. Pre-soak larger seeds (like peas, sunflower) for 6–8 hours before sowing.</li>
            <li><strong>Cover for Germination:</strong> Cover with another tray or lid for 2–3 days. Mist daily to keep moist.</li>
            <li><strong>Provide Light:</strong> After sprouting, remove the cover and place under sunlight or grow lights. Ensure ventilation.</li>
            <li><strong>Water Carefully:</strong> Mist lightly or use bottom watering to avoid damaging stems. Keep moist, not soggy.</li>
            <li><strong>Harvest Your Microgreens:</strong> In 7–14 days, when they’re 2–4 inches tall, cut above the soil line using clean scissors.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🍴 How to Use Microgreens in Daily Life</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fresh salads 🥗</li>
            <li>Sandwiches & wraps 🥪</li>
            <li>Smoothies 🥤</li>
            <li>Soups 🍲</li>
            <li>Garnish for main dishes 🍽</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">✅ Tips for Growing Microgreens Successfully</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Grow small batches regularly for continuous supply.</li>
            <li>Try different varieties for unique flavors.</li>
            <li>Avoid overwatering to prevent mold.</li>
            <li>Always use high-quality seeds meant for microgreens.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">❓ Frequently Asked Questions (FAQs) About Microgreens</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Which microgreens are easiest to grow?</strong> Radish, mustard, arugula, and broccoli are the easiest and fastest to grow, perfect for beginners.</li>
            <li><strong>Do microgreens regrow after cutting?</strong> Most microgreens do not regrow after harvest. Pea and wheatgrass are exceptions, as they may regrow once more.</li>
            <li><strong>How long do microgreens take to grow?</strong> Microgreens are typically ready to harvest in 7–14 days, depending on the variety.</li>
            <li><strong>Are microgreens healthier than vegetables?</strong> Yes! Studies show microgreens can contain up to 40 times more nutrients than their mature vegetable counterparts.</li>
            <li><strong>Can I grow microgreens without soil?</strong> Yes, you can use soilless mediums like cocopeat, vermiculite, or hydroponic mats.</li>
            <li><strong>How much light do microgreens need?</strong> Microgreens need at least 4–6 hours of sunlight daily. If sunlight is limited, LED grow lights are a great alternative.</li>
            <li><strong>Can I make money by growing microgreens?</strong> Yes. Microgreens farming is a profitable business with high demand in restaurants, cafes, and health-conscious households.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌟 Final Thoughts</h2>
          <p>
            Growing microgreens at home is one of the simplest and most rewarding DIY gardening projects. With little space and effort, you can enjoy fresh, organic, and nutrient-packed greens year-round.
          </p>
          <p>👉 Pro Tip: Start small, experiment with different varieties, and soon you’ll master the art of growing microgreens at home!</p>
        </section>
      </main>

      {/* Recommended Blogs */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Recommended Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedPosts.map((post, idx) => (
            <Link
              key={idx}
              href={post.slug}
              className="rounded-md overflow-hidden bg-white shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-60 sm:h-64 md:h-52 lg:h-56 xl:h-64">
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-600">{post.date}</p>
                  <h3 className="text-base sm:text-lg font-semibold mt-2 mb-3 leading-snug text-[#000]">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-sm text-blue-800 font-semibold border-t pt-2 border-gray-200">
                  <span>Read more</span>
                  <span>{post.postId}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
