import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import fetchFromCMS from "../ lib/service";

export default function Home({ portfolioItems }) {
  return (
    <Layout>
      <div className="entries">
        <div className="row justify-content-start">
          {portfolioItems.map((portfolio) => (
            <div className="col-md-6" key={portfolio.id}>
              <div className="entry mb-3" className="cursor-pointer">
                <Link
                  as={`/portfolio/${portfolio.slug}`}
                  href="/portfolio/[id]"
                >
                  <div className="main-image">
                    <Image
                      src={portfolio.image.name}
                      width={600}
                      height={400}
                      alt={portfolio.Headline}
                    />
                    <h1>{portfolio.Headline}</h1>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolioItems = await fetchFromCMS("portfolios");
  return {
    props: { portfolioItems },
    revalidate: 1,
  };
}
