import Image from "next/image";
import Layout from "../../components/Layout";
import fetchFromCMS from "../../ lib/service";
import processMarkdown from "../../ lib/processMarkdown";

const PortfolioItem = ({ portfolio }) => {
  return (
    <Layout>
      <div className="row">
        <div className="portfolio-image text-center mb-4">
          <div className="col-md-12">
            <Image src={portfolio.image.name} width={1000} height={500} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-content">
          <div className="col-md-12">
            <div className="portfolio-headline text-center m-2">
              <h1>{portfolio.Headline}</h1>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: portfolio.content,
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getStaticPaths() {
  const portfolios = await fetchFromCMS("portfolios");
  return {
    paths: portfolios.map((portfolio) => ({
      params: {
        slug: portfolio.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const portfolio = await fetchFromCMS(`portfolios?slug=${params.slug}`);
  const content = await processMarkdown(portfolio[0].content);
  console.log("*************", portfolio[0]);
  return {
    props: { portfolio: { ...portfolio[0], content } },
    revalidate: 1,
  };
}
export default PortfolioItem;
