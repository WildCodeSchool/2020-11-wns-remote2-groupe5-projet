import React from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import { Draggable } from 'react-beautiful-dnd';
import { Box, VStack, InputGroup, InputLeftElement, Input, Button, Flex, Text } from '@chakra-ui/react';
import {  FaPhone, FaCity, FaGlobe, FaBirthdayCake, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiDownArrow, BiUpArrow, BiTrash } from "react-icons/bi";

type SousTitreProps = {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  value: string;
  dispatch: React.Dispatch<Action>;
};

export default function SousTitre({
  index,
  isFirst,
  isLast,
  value,
  dispatch,
}: SousTitreProps): JSX.Element {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="flex flex-col m-4"
        >
          <div className="bg-gray-800 rounded-t-md">
            <Flex alignItems="center" justify="space-between" p="8px">
              <Text>Sous-titre</Text>

              <Flex>
                {!isFirst && (
                  <BiUpArrow
                    className="fas fa-chevron-up mx-2 cursor-pointer"
                    onClick={() =>
                      dispatch({ type: 'MOVE_UP', payload: { index } })
                    }
                  ></BiUpArrow>
                )}
                {!isLast && (
                  <BiDownArrow
                    className="fas fa-chevron-down mx-2 cursor-pointer"
                    onClick={() =>
                      dispatch({ type: 'MOVE_DOWN', payload: { index } })
                    }
                  ></BiDownArrow>
                )}

                <BiTrash
                  className="far fa-trash-alt cursor-pointer ml-3"
                  onClick={() => {
                    dispatch({ type: 'REMOVE', payload: { index } });
                  }}
                ></BiTrash>
              </Flex>
            </Flex>
          </div>

          <input
            onChange={(e) =>
              dispatch({
                type: 'SET_VALUE',
                payload: { index, value: e.target.value },
              })
            }
            value={value}
            placeholder="Ecrivez un sous-titre"
            className="rounded-b-md h-10 py-2 px-4"
          />
        </Box>
      )}
    </Draggable>
  );
}
