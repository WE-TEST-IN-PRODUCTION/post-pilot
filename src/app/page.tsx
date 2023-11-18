"use client"
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [showDatePicker, setShowDatePicker] = useState(false);

  

  return (
    <>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>$nombre</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
               <textarea
                    required
                    className="w-full h-56 rounded-lg border-gray-200 p-3 text-sm "
                    placeholder="¿Sobre qué quieres hablar?"
                    id="message"></textarea>
            </FormControl>
            {showDatePicker && (
              <Box mt={4}>
                {/* <DateTimePicker
                  onChange={onChange}
                  value={value}
                /> */}
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={() => setShowDatePicker(!showDatePicker)} >
              🕘
            </Button>
            <Button  mr={3} type='submit'>
              Publicar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
<section>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Bienvenido</h2>

      <Button onClick={onOpen}>Publicar</Button>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
 
      <a className="block rounded-xl border border-gray-800 p-8 shadow-xl " href="#"
      >
    
        <h2 className="mt-2 text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            Texto
        </p>
      </a>

       <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl "
        href="#"
      >
    
        <h2 className="text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            🚀 ¡Emocionado por unirme a Open Source Jam con Carlos Ignacio Cabruja Rodil y Fernando Nevot Hernández! 🚀
            <br />
                🌐 #OpenSourceJam #Contribución #Comunidad
        </p>
      </a>

       <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl "
        href="#"
      >
    
        <h2 className="mt-2 text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            
        </p>
      </a>

       <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl "
        href="#"
      >
    
        <h2 className="mt-2 text-xl font-bold ">📅</h2>

        <p className="mt-1 text-sm ">
            
        </p>
      </a>  
    </div>
  </div>
</section>
    </>
  )
}
