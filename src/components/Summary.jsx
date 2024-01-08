import { Card, Text, Heading, Flex, Box, Grid } from "@radix-ui/themes";

export function Summary() {
  return (
    <>
      <Grid columns="4" gap="5" width="auto">
        <Card>
          <Flex justify="between" align="baseline" p="3">
            <Box>
              <Heading as="h2" size="2" mb="2">
                Total Revenue
              </Heading>
              <Text size="6" weight="bold">
                $45,231.89
              </Text>
              <br />
              <Text size="1" color="gray">
                +20.1% from last month
              </Text>
            </Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </Flex>
        </Card>

        <Card>
          <Flex justify="between" align="baseline" p="3">
            <Box>
              <Heading as="h2" size="2" mb="2">
                Subscriptions
              </Heading>
              <Text size="6" weight="bold">
                +2350
              </Text>
              <br />
              <Text size="1" color="gray">
                +180.1% from last month
              </Text>
            </Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </Flex>
        </Card>

        <Card>
          <Flex justify="between" align="baseline" p="3">
            <Box>
              <Heading as="h2" size="2" mb="2">
                Sales
              </Heading>
              <Text size="6" weight="bold">
                +12,234
              </Text>
              <br />
              <Text size="1" color="gray">
                +19% from last month
              </Text>
            </Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <path d="M2 10h20"></path>
            </svg>
          </Flex>
        </Card>

        <Card>
          <Flex justify="between" align="baseline" p="3">
            <Box>
              <Heading as="h2" size="2" mb="2">
                Active Now
              </Heading>
              <Text size="6" weight="bold">
                +573
              </Text>
              <br />
              <Text size="1" color="gray">
                +201 since last hour
              </Text>
            </Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </Flex>
        </Card>
      </Grid>
    </>
  );
}
