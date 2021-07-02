type State = { contentType: ContentType; value: string, file?: File | null | undefined }[];

export type ContentType =
  | 'Titre'
  | 'Sous-titre'
  | 'Paragraphe'
  | 'Lien'
  | 'Image';

export type Action =
  | {
      type: 'ADD';
      payload: { contentType: ContentType };
    }
  | {
      type: 'REMOVE';
      payload: { index: number };
    }
  | {
      type: 'MOVE_UP';
      payload: { index: number };
    }
  | {
      type: 'MOVE_DOWN';
      payload: { index: number };
    }
  | {
      type: 'SET_VALUE';
      payload: { index: number; value: string };
    }
  | {
      type: 'SET_FILE';
      payload: { index: number; file: File | null | undefined};
    }
  | {
      type: 'DRAG_DROP';
      payload: { index: number; newIndex?: number };
    };

const fieldsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD': {
      const { contentType } = action.payload;
      return [...state, { contentType, value: '' }];
    }

    case 'REMOVE': {
      const { index } = action.payload;
      return state.filter((_, i) => i !== index);
    }

    case 'MOVE_UP': {
      const { index } = action.payload;
      const fields = [...state];
      fields.splice(index - 1, 2, fields[index], fields[index - 1]);
      return fields;
    }

    case 'MOVE_DOWN': {
      const { index } = action.payload;
      const fields = [...state];
      fields.splice(index, 2, fields[index + 1], fields[index]);
      return fields;
    }

    case 'SET_VALUE': {
      const { index, value } = action.payload;
      const fields = [...state];
      fields[index].value = value;
      return fields;
    }

    case 'SET_FILE': {
      const {index, file} = action.payload;
      console.log(file)
      const fields = [...state];
      fields[index].file = file;
      return fields;
    }

    case 'DRAG_DROP': {
      const { index, newIndex } = action.payload;

      if (newIndex) {
        const movedItem = state[index];
        const remainingItems = state.filter((item, i) => i !== index);

        return [
          ...remainingItems.slice(0, newIndex),
          movedItem,
          ...remainingItems.slice(newIndex),
        ];
      }
      return state;
    }

    default:
      return state;
  }
};

export default fieldsReducer;
