import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
  return (
    <Stack>
      {[...Array(12)].map((_, i) => (
        <Skeleton key={i} height="45px" />
      ))}
    </Stack>
  );
};

export default ChatLoading;
