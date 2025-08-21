import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const blogPosts = [
   {
    date: 'August 21, 2025',
    title: 'How to Grow Microgreens at Home – A Simple DIY Guide',
    imgSrc: '/background/blog-3.jpg',
    postId: '03',
    slug: '/blog/03',
  },
  {
    date: 'August 21, 2025',
    title: 'Microgreens: Nature’s Tiny Superfood for a Healthier You',
    imgSrc: '/background/blog-1.jpg',
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
];

export default function Blog02() {
  // Recommended posts exclude current blog (postId '02')
  const recommendedPosts = blogPosts.filter(post => post.postId !== '02');

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <Head>
        <title>Microgreens: Nature’s Tiny Superfood for a Healthier You</title>
        <meta
          name="description"
          content="Discover why microgreens are nature’s tiny superfood. Learn health benefits, usage ideas, and tips for growing them at home."
        />
        <meta
          name="keywords"
          content="Microgreens health benefits, Superfood microgreens, Fresh microgreens, Grow microgreens, Microgreens for immunity, Microgreens for weight loss"
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/blog/microgreens-natures-tiny-superfood"
        />
      </Head>

      {/* Hero Section */}
      <section className="bg-[#e6f4e8] py-10 shadow-md">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            🌱 Microgreens: Nature’s Tiny Superfood for a Healthier You
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            These tiny plants are one of the easiest and most powerful ways to add nutrition, flavor, and freshness to your daily meals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-gray-700">
        {/* Featured Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg md:h-[280px] max-md:h-[160px]">
          <Image
            src="/background/blog-1.jpg"
            alt="Microgreens superfood"
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌿 What Exactly Are Microgreens?</h2>
          <p>
            Microgreens are the young shoots of vegetables and herbs, harvested just a few days after sprouting. Don’t let their size fool you – they are packed with 4–40 times more nutrients than fully grown greens. Popular varieties include broccoli, beetroot, radish, kale, mustard, basil, and arugula.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">💪 Why Are Microgreens So Special?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Rich in Vitamins & Minerals:</strong> A natural source of Vitamin C, E, K, iron, and magnesium.</li>
            <li><strong>Boost Immunity:</strong> High in antioxidants that protect your body from stress and pollution.</li>
            <li><strong>Heart & Digestive Health:</strong> Helps manage cholesterol, blood pressure, and gut balance.</li>
            <li><strong>Weight-Friendly:</strong> Low in calories but full of energy and fiber.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🍽 How to Enjoy Microgreens in Your Meals</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Toss them into salads & sandwiches for extra crunch.</li>
            <li>Use as a garnish on soups, curries, and snacks.</li>
            <li>Blend into smoothies & juices for a nutrient boost.</li>
            <li>Top your parathas, wraps, or pizzas with a fresh touch.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌱 Fresh, Local & Naturally Grown</h2>
          <p>
            Our microgreens are grown with care, hygiene, and love, using natural growing methods without harmful chemicals. We harvest them fresh and deliver directly to you – so that you can enjoy farm-to-table goodness in every bite.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🏡 Want to Try Growing Them at Home?</h2>
          <p>
            Microgreens are super easy to grow indoors. With just a small tray, cocopeat, and seeds, you can enjoy your own harvest in less than 2 weeks. It’s a fun activity for kids and a great step toward a healthy lifestyle.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌟 Final Word</h2>
          <p>
            Microgreens are more than just a garnish – they’re a superfood for modern life. If you’re looking for freshness, nutrition, and a way to make your meals healthier, microgreens are the perfect choice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🚀 Order Fresh Microgreens Today!</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link href="/shop" className="text-blue-600 font-semibold">Shop Now</Link> for farm-fresh, chemical-free microgreens delivered to your doorstep.</li>
            <li><Link href="/contact" className="text-blue-600 font-semibold">Contact Us</Link> to know more about varieties, prices, and bulk orders.</li>
            <li><Link href="/join" className="text-blue-600 font-semibold">Join Us</Link> on our journey towards a healthier lifestyle with microgreens.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6">🌱 Taglines for Your Microgreens Brand</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>“Tiny greens, mighty nutrition.”</li>
            <li>“Fresh from our farm to your fork.”</li>
            <li>“Superfood in every bite.”</li>
            <li>“Small size, big health benefits.”</li>
            <li>“Eat clean, live green.”</li>
            <li>“Harvested fresh, delivered with love.”</li>
            <li>“Healthy living starts with microgreens.”</li>
            <li>“Nature’s power packed in tiny leaves.”</li>
            <li>“Freshness you can see, taste, and feel.”</li>
            <li>“Your daily dose of health, naturally.”</li>
          </ul>
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
