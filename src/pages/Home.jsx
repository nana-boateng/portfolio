// components
import Summary from "../components/Summary";
import PageHeader from "./../components/PageHeader";
import Quote from "./../components/Quote";
import Carousel from "./../components/Carousel";

export default function Home() {
  return (
    <div className="h-screen bg-indigo-300 flex flex-col justify-center">
      {/*Name*/}
      <PageHeader title="nana." />
      {/* Quote  */}
      <Quote />
      {/* Summary */}
      <Summary />
      {/* Software Carousel  */}
      <Carousel />
      {/* Project Cards  */}
    </div>
  );
}
