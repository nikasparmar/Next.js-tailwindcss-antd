import Head from 'next/head';
import { connect } from 'react-redux';
import React from 'react';
import { getuser } from '../api/user';
import { changeHomePageTitle } from '../redux/reducer/homePageReducer';

const Home = (props) => (
  <div className="">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="bg-red-600 py-16 text-center text-5xl text-white">
        {props.homePage.title}
      </h1>
      {/* {process.env.NEXT_PUBLIC_ANALYTICS_ID} */}
      <div className="text-center">
        <button className="bg-blue-500 p-4 my-12 rounded text-white" onClick={() => props.changeHomePageTitle({ newTitle: 'Hello Happiness' })}>Change Title</button>
      </div>
    </main>
  </div>
);

Home.getInitialProps = async () => ({
  data: await getuser(),
});

const mapStateToProps = (state) => ({
  homePage: state.homePage,
});

const mapDispatchToProps = {
  changeHomePageTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
