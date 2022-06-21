import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Template, FeatureConfig, StreamOutput } from "../types";
import { reactWrapper } from "../wrapper";

export const config: FeatureConfig = {
  name: "loc-hydrated",
  streamId: "sites-load-50-500-1000000",
  stream: {
    "$id": "sites-load-50-500-1000000",
    "source": "knowledgeGraph",
    "destination": "pages",
    "fields": [
      "id",
      "name",
      "slug",
      "c_25kbField1",
      "c_25kbField2"
    ],
    "filter": {
      "entityTypes": [
        "location"
      ]
    },
    "localization": {
      "locales": [
        "en"
      ],
      "primary": false
    }
  }
};

export const getPath = (data: StreamOutput) =>
  `react/hydrated/loc-${data.id}`;

export const Page: Template = ({ data }) => {
  const { name, id, c_25kbField1, c_25kbField2 } = data;
  const [fontSize, setFontSize] = React.useState(20);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div>
        <button onClick={() => setFontSize((prev) => prev - 5)}>
          {`Decrease font size`}
        </button>
        <button onClick={() => setFontSize((prev) => prev + 5)}>
          {`Increase font size`}
        </button>
      </div>
      <div style={{ fontSize: fontSize }}>
        <h1>{`Location ${id}: ${name}`}</h1>
      </div>
      <div>
        <h1>500 kb of data</h1>

        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>
        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>

        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>       
        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>

        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>
        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>

        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>       
        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>

        <p>{c_25kbField1}</p>
        <p>{c_25kbField2}</p>

      </div>
    </div>
  );
};

export const render = (data: any) =>
  reactWrapper(
    data,
    "loc-hydrated.js",
    renderToStaticMarkup(<Page data={data} />),
    true
  );
