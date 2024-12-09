import React from "react";

const Home = () => {
  return (
    <div className="home">
      <section className="about">
        <div className="w-96 mx-auto bg-red-400 rounded-full text-white text-center py-4 mt-6">
          <h1 className="font-bold">
            Javaを用いたMinecraftプラグイン開発を行っています
          </h1>
        </div>
        <p>以下のようなものを作りました。</p>
      </section>
      <section className="SNS">
        <div className="w-96 mx-auto bg-red-400 rounded-full text-white text-center py-4 mt-6">
          <h1 className="font-bold">SNSはこちら</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
