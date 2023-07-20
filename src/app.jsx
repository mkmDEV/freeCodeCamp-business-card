import { Article, Button, FooterComponent, HeaderComponent, Image } from "@components";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

const articles = [
  {
    title: "About",
    content: "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn. Interests Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
  },
  {
    title: "Interests",
    content: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
  }
]

const App = () => (
  <div className="container">
    <Image/>
    <HeaderComponent/>

    <section className="button__container">
      <Button className="btn btn-secondary" icon={ <FaEnvelope fill={ '#1E1F26' }/> } label={ 'Email' }/>
      <Button className="btn btn-primary" icon={ <FaLinkedin/> } label={ 'LinkedIn' }/>
    </section>

    <main className="articles">
      {
        (() => {
          const articleArray = [];
          for (let article in articles) {
            articleArray.push(
              <Article
                key={article.title}
                title={articles[article].title}
                content={articles[article].content}
              />
            );
          }
          return articleArray;
        })()
      }

    </main>

    <FooterComponent/>
  </div>
);
export default App
