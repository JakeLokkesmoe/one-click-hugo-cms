import { parseISO } from "date-fns";
import imgSrcSet from "../util/imgSrcSet";
import BookSummary from "../bookSummary";
import Markdown from "../markdown";

export default function Home({ books, welcome }) {
  const hasFeaturedBook =
    books.length > 0 &&
    books[0].releaseDate &&
    parseISO(books[0].releaseDate) >= Date.now();

  return (
    <>
      <section className="bg-grey-1">
        {hasFeaturedBook && (
          <div className="bg-white">
            <div className="mw7 center flex-m flex-wrap items-start pt5">
              <BookSummary {...books[0]} featured />
            </div>
          </div>
        )}
        <div className="mw7 center flex-m flex-wrap items-start pt5">
          {books.slice(hasFeaturedBook ? 1 : 0).map((book) => (
            <BookSummary key={book.id} {...book} />
          ))}
        </div>
      </section>

      <section className="bg-off-white pb4 pt5">
        <div className="mw7 center">
          <div className="flex-m mb4">
            <div className="ph3 order-last-m">
              <img
                {...imgSrcSet({
                  src: welcome.image,
                  resize: "fit",
                  w: 350,
                })}
                alt="Amy Lynn Green"
                className="db mb2 center mw4"
              />
            </div>

            <div className="ph3">
              <h3 className="f3 b lh-title mb1">{welcome.heading}</h3>
              <div className="cms">
                <Markdown source={welcome.text_md} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
