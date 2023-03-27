import { GetStaticProps, InferGetStaticPropsType } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUIReact from "swagger-ui-react";

const SwaggerUI = dynamic<{
  spec: any;
}>(import("swagger-ui-react"), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "TMS Apis",
        version: "1.0",
      },
      schema: ["https"],
    },
    apiFolder: "src/pages/api",
  });

  return {
    props: {
      spec,
    },
  };
};

ApiDoc.isDoc = true;
export default ApiDoc;
