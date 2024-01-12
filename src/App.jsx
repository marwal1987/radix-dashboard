import { Flex, Card } from "@radix-ui/themes";
import { Top } from "./components/Top.jsx";
import { Summary } from "./components/Summary.jsx";
import { RecentSales } from "./components/RecentSales.jsx";
import { Overview } from "./components/Overview.jsx";
import "./index.css";

export default function App() {
  return (
    <>
      <Card className="w-[90%] xl:w-[70%] mx-auto mt-16 drop-shadow-xl">
        <Flex direction="column" gap="5" p="5">
          <Top />
          <Summary />
          <Flex gap="5">
            <Overview />
            <RecentSales />
          </Flex>
        </Flex>
      </Card>
    </>
  );
}
