import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Template, FeatureConfig, StreamOutput } from "../types";
import { reactWrapper } from "../wrapper";

export const config: FeatureConfig = {
  name: "loc-hydrated",
  streamId: "sites-load-5-100-100-1",
  stream: {
    "$id": "sites-load-5-100-100-1",
    "source": "knowledgeGraph",
    "destination": "pages",
    "fields": [
      "id",
      "name",
      "slug",
      "c_5kbField"
    ],
    "filter": {
      "savedFilterIds": ["1122543883"]
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
  const { name, id, c_5kbField  } = data;
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
        <h1>100 kb of data</h1>

        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>

        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>

        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>

        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
        <p>{c_5kbField}</p>
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
