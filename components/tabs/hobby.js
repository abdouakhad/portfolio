import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import SingleProject from "../singletabs/SingleProject"
// Since it has the same format as the Project is why I choose it
const Hobby = () => {
  return (
    <div>
      <SingleProject title="Basketball">
        <p className="bg-vert border rounded-md px-2 flex justify-between gap-2 hover:cursor-not-allowed">
          <a className="block">
            <FontAwesomeIcon icon="futbol" />
          </a>
        </p>
      </SingleProject>
      <SingleProject title="Soccer">
        <p className="bg-vert border rounded-md px-2 flex justify-between gap-2 hover:cursor-not-allowed">
          <a className="block">
            <FontAwesomeIcon icon="basketball-ball" />
          </a>
        </p>
      </SingleProject>
    </div>
  )
}

export default Hobby
