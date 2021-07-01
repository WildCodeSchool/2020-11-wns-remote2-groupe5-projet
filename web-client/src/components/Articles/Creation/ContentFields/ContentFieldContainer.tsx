import React, { ReactNode } from 'react';
import { Action } from '../../../../reducers/fieldsReducer';
import { Draggable } from 'react-beautiful-dnd';
import { Flex, Text } from '@chakra-ui/react';
import { BiDownArrow, BiUpArrow, BiTrash } from "react-icons/bi";

type ContentFieldContainerProps = {
  index: number;
  name: string;
  isFirst?: boolean;
  isLast?: boolean;
  value: string;
  dispatch: React.Dispatch<Action>;
  children: ReactNode
};

export default function ContentFieldContainer({
  index,
  name,
  isFirst,
  isLast,
  value,
  dispatch,
  children
}: ContentFieldContainerProps): JSX.Element {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <Flex
          flexDir="column"
          m="8px"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}

        >
          <Flex 
              alignItems="center" 
              justify="space-between" 
              p="8px" 
              color="#FFF"
              backgroundColor="gray.800"
            >
              <Text>{name}</Text>
              <Flex>
                {!isFirst && (
                  <BiUpArrow
                    onClick={() =>
                      dispatch({ type: 'MOVE_UP', payload: { index } })
                    }
                  ></BiUpArrow>
                )}
                {!isLast && (
                  <BiDownArrow
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
            {children}
        </Flex>
      )}
    </Draggable>
  );
}
