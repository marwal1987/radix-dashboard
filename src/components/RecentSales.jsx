import { Card, Text, Flex, Avatar, Box, Heading } from "@radix-ui/themes";

export function RecentSales() {
  return (
    <Card className="w-[40%]">
      <Box p="3">
        <Heading as="h2" size="2">
          Recent sales
        </Heading>
        <Text size="2" color="gray">
          You made 265 sales this month
        </Text>
      </Box>

      {/* Göra en egen komponent, typ EmployeeSales. Istället för att kopiera allt. Sen importera EmployeeSales och använda props. Så blir det inte lika plottrigt, om jag fattar rätt. */}

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/01.png"
            radius="full"
            fallback="O"
          />
          <Box>
            <Text size="2" weight="bold">
              Olivia Martin
            </Text>{" "}
            <br />
            <Text size="2" color="gray">
              olivia.martin@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold">
          +$1,9999.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/02.png"
            radius="full"
            fallback="J"
          />
          <Box>
            <Text size="2" weight="bold">
              Jackson Lee
            </Text>{" "}
            <br />
            <Text size="2" color="gray">
              jackson.lee@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold">
          +$39.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/03.png"
            radius="full"
            fallback="I"
          />
          <Box>
            <Text size="2" weight="bold">
              Isabella Nguyen{" "}
            </Text>{" "}
            <br />
            <Text size="2" color="gray">
              isabella.nguyen@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold">
          +$299.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/04.png"
            radius="full"
            fallback="W"
          />
          <Box>
            <Text size="2" weight="bold">
              William Kim
            </Text>{" "}
            <br />
            <Text size="2" color="gray">
              will@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold">
          +$99.00
        </Text>
      </Flex>

      <Flex justify="between" align="center" p="3">
        <Flex gap="4" align="center">
          <Avatar
            src="https://ui.shadcn.com/avatars/05.png"
            radius="full"
            fallback="S"
          />
          <Box>
            <Text size="2" weight="bold">
              Sofia Davis
            </Text>{" "}
            <br />
            <Text size="2" color="gray">
              sofia.davis@email.com
            </Text>
          </Box>
        </Flex>

        <Text size="4" weight="bold">
          +$39.00
        </Text>
      </Flex>
    </Card>
  );
}
