export type ProductContextType = {
  selectedProducts: Array<string>;
  handleSelectProduct: (itemToToggle: string) => void;
};

export type ButtonType = {
  classes?: string,
  label?: string,
  disabled: boolean,
}

export type DescriptionType = {
  classes?: string,
  text: string,
}

export type TitleType = {
  classes?: string,
  title: string,
}