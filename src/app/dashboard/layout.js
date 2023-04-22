import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
