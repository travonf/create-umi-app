export const layout = {
  logout: () => {
    console.log(arguments);
  },
  rightRender: (initialState) => {
    console.log(initialState);
    return "Hello";
  },
  onError: (error: Error, info: any) => {
    console.log(error, info);
  },
  ErrorComponent: (error: Error) => {
    return null;
  }
};
