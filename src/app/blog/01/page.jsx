import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const blogPosts = [
  {
    date: 'August 21, 2025',
    title: 'Microgreens: Nature’s Tiny Superfood for a Healthier You',
    imgSrc: '/background/blog-1.jpg',
    postId: '02',
    slug: '/blog/02',
  },
  {
    date: 'August 21, 2025',
    title: 'How to Grow Microgreens at Home – A Simple DIY Guide',
    imgSrc: '/background/blog-3.jpg',
    postId: '03',
    slug: '/blog/03',
  },
   {
    date: 'August 21, 2025',
    title: 'Top Benefits of Microgreens in Daily Life – The Superfood You Need',
    imgSrc: '/background/blog-2.jpg',
    postId: '04',
    slug: '/blog/04',
  },
];

export default function Blog01() {
  // Recommended posts exclude current blog (postId '01')
  const recommendedPosts = blogPosts.filter(post => post.postId !== '01');

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Head>
        <title>Top Benefits of Microgreens in Daily Life – The Superfood You Need</title>
        <meta
          name="description"
          content="Discover the top benefits of microgreens in daily life. Boost immunity, support digestion, manage weight & improve overall wellness."
        />
        <meta
          name="keywords"
          content="Benefits of microgreens, Microgreens in daily life, Superfoods for health, Microgreens for weight loss, Microgreens for immunity, Healthy lifestyle with microgreens"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/blog/top-benefits-of-microgreens"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-[#e6f4e8] py-10 shadow-md">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            🌱 Top Benefits of Microgreens in Daily Life – The Superfood You Need
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Are you looking for an easy and natural way to boost your health? Microgreens are the answer!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-gray-700">
        {/* Featured Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg md:h-[280px] max-md:h-[160px]">
          <Image
            src="/background/blog-2.jpg"
            alt="Fresh microgreens for daily health benefits"
            fill
            className="object-cover"
          />
        </div>

        {/* Introduction */}
        <section className="space-y-6">
          <p>
            Are you looking for an easy and natural way to boost your health? If yes, then microgreens are the answer! These tiny greens are not just a food trend – they are one of the most powerful superfoods you can add to your daily diet.
          </p>
          <p>
            Packed with essential nutrients, antioxidants, and minerals, microgreens can transform your meals and improve your overall well-being. Let’s explore the top benefits of microgreens in day-to-day life and how you can start including them in your routine.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌟 What Are Microgreens?</h2>
          <p>
            Microgreens are the young seedlings of vegetables and herbs such as broccoli, kale, radish, mustard, basil, and arugula. Harvested just 7–14 days after germination, they are small in size but loaded with 40x more nutrients than mature plants.
          </p>
          <p>
            These nutrient-dense greens are gaining popularity worldwide as a healthy lifestyle food because of their powerful benefits.
          </p>
        </section>

        {/* Health Benefits */}
        <section className="space-y-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">💪 Health Benefits of Microgreens in Daily Life</h2>
          <div className="space-y-4 mt-4">
            <h3 className="font-semibold text-lg">1. Nutrient Powerhouse</h3>
            <p>Microgreens are rich in vitamins A, C, E, and K, along with calcium, magnesium, iron, potassium, and zinc. This makes them a natural multivitamin that supports overall health and energy.</p>

            <h3 className="font-semibold text-lg">2. Boosts Immunity</h3>
            <p>With their high antioxidant content, microgreens protect the body from free radicals, strengthen the immune system, and reduce the risk of chronic diseases.</p>

            <h3 className="font-semibold text-lg">3. Supports Digestion & Gut Health</h3>
            <p>Microgreens are a great source of dietary fiber and digestive enzymes, promoting better digestion, nutrient absorption, and a healthy gut.</p>

            <h3 className="font-semibold text-lg">4. Weight Management Superfood</h3>
            <p>Low in calories and high in nutrition, microgreens help keep you full, reduce cravings, and support healthy weight loss goals.</p>

            <h3 className="font-semibold text-lg">5. Promotes Heart Health</h3>
            <p>Varieties like broccoli, kale, and mustard microgreens are proven to reduce cholesterol levels, regulate blood pressure, and promote a healthy heart.</p>

            <h3 className="font-semibold text-lg">6. Glowing Skin & Healthy Hair</h3>
            <p>Microgreens are packed with chlorophyll, vitamins, and antioxidants that detoxify the body and enhance your skin and hair naturally.</p>
          </div>
        </section>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 my-6">
          <div className="relative rounded-lg overflow-hidden shadow-lg md:h-[280px] max-md:h-[160px]">
            <Image
              src="/product/beetroot.png"
              alt="Nutrient-rich microgreens superfood"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg md:h-[280px] max-md:h-[160px]">
            <Image
              src="/product/beetroot.png"
              alt="Adding microgreens to daily meals"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* How to Add Microgreens */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🍴 How to Add Microgreens to Your Diet</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sprinkle on salads, sandwiches, and wraps.</li>
            <li>Blend into smoothies and detox juices.</li>
            <li>Garnish on soups, curries, and dals.</li>
            <li>Add to omelets, pasta, parathas, or rice bowls.</li>
            <li>Even a handful of microgreens every day can give your body a natural health boost.</li>
          </ul>
        </section>

        {/* Why Microgreens */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌿 Why Microgreens Are the Best Superfood for Daily Life</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fresh, chemical-free, and locally grown.</li>
            <li>Easy to digest and suitable for all age groups.</li>
            <li>Adds taste, crunch, and nutrition to meals.</li>
            <li>A sustainable and eco-friendly food choice.</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">✅ Conclusion</h2>
          <p>
            Microgreens are not just a garnish – they are a superfood for a healthier lifestyle. Adding them to your daily meals is a simple yet powerful step towards better immunity, higher energy, glowing skin, and overall wellness.
          </p>
          <p>
            So, make space for microgreens in your kitchen today and let these tiny greens bring you big health benefits every single day!
          </p>
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
