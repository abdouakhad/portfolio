import SingleProject from "../singletabs/SingleProject"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Project = () => {
  return (
    <>
      <SingleProject
        title="TopTop E-commerce Website"
        subTitle="Next js & Tailwind CSS "
        description="TopTop is an e-commerce website where users can buy products. They also have ability to create their own shop and sell their products. 
        The paypal payment gateway is used for payments. Currently still in development, some more functionalities are to be added."
      >
        <p className="bg-vert border rounded-md px-2 flex justify-between gap-2">
          <Link href="https://toptop-five.vercel.app/">
            <a className="block hover:scale-110 transition transform hover:-translate-y-1 ease-in-out duration-300">
              <FontAwesomeIcon icon="eye" />
            </a>
          </Link>
        </p>
      </SingleProject>
      {/* <SingleProject
        title="Personal Portfolio Website"
        subTitle="Next js & Tailwind CSS "
        description="A Personal Portfolio website to showcase all my details and projects at one place.
        And also provide information such as what I do, what services I  offer, and how to contact me. 
        "
      >
        <p className="bg-vert border rounded-md px-2 flex justify-between gap-2">
          <Link href="/">
            <a className="block hover:scale-110 transition transform hover:-translate-y-1 ease-in-out duration-300">
              <FontAwesomeIcon icon="eye" />
            </a>
          </Link>
          <Link href="https://github.com/abdouakhad/portfolio">
            <a className="block hover:scale-110 transition transform hover:-translate-y-1 ease-in-out dura duration-300">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </Link>
        </p>
      </SingleProject> */}
      <SingleProject
        title="IAG Company"
        subTitle="HTML, CSS && JS"
        description={`IAG is a company that aims to contribute to the development of endogenous thinking to meet the challenges of governance in Africa. I collaborated with them to create a website that is a platform for the company to share their ideas and projects.`}
      >
        <p className="bg-vert border rounded-md px-2 flex justify-between gap-2">
          <Link href="https://www.africagovernanceinstitute.org/">
            <a className="block hover:scale-110 transition transform hover:-translate-y-1 ease-in-out dura duration-300">
              <FontAwesomeIcon icon="eye" />
            </a>
          </Link>
        </p>
      </SingleProject>
      <SingleProject
        title="Easy Money (Own by a company)"
        subTitle="React js & Express js"
        description="Easy Money is a brand for a company that is selling recycling materials. It is actually two web apps. One that organize products 
        bought or sold and does estimation for new up coming products, and another that is an E Commerce where they sell the actual products(in development)."
      >
        <p className="bg-vert border rounded-md px-2 flex justify-between gap-2 hover:cursor-not-allowed">
          <a className="block">
            <FontAwesomeIcon icon="eye-slash" />
          </a>
        </p>
      </SingleProject>
      <SingleProject
        title="Yaay ak Domm "
        subTitle="Electron js, React js && MongoDB"
        description="Yaay ak Domm meaning [mother & child] in our local language is an app that we are working on in our startup project
        that can help women get consulted online by linking doctors and patients through a telemedecin."
      >
        {" "}
        <p className="bg-vert border rounded-md px-2 flex justify-between gap-2 hover:cursor-not-allowed">
          <a className="block">
            <FontAwesomeIcon icon="eye-slash" />
          </a>
        </p>
      </SingleProject>
    </>
  )
}

export default Project
