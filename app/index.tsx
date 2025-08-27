import { useState } from "react";

import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import ModalCustom from "@/components/Modal";

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Center>
      <Heading bold italic size="2xl">
        Un titre très intessant
      </Heading>

      <Text size="xl">Edit app/index.tsx to edit this screen.</Text>

      <Button action="positive" onPress={() => setShowModal(true)}>
        <ButtonText>Click me</ButtonText>
      </Button>

      <ModalCustom showModal={showModal} setShowModal={setShowModal} />
    </Center>
  );
}
