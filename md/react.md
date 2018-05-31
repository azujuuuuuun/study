# React

## React + Redux
### action
- typeとprop/stateを持つ
  ```
  export const action = args => ({
    type: '',
    prop: args,
  });
  ```
- redux-actを利用すると、createActionでactionを生成できる
  ```
  export const action = createAction('action type');
  ```
### component
- Stateless Functional Fomponents
  - stateを持たない
  - propsをもらい、returnでjsxを返すだけ
### container
- stateを持つ
- コンポーネントのロジックをまとめて、componentにpropsとして渡す
- 引数にstateをとり、propsを返すmapStateToProps関数
  ```
  function mapStateToProps(state) {
    ...
    return props;
  };
  ```
- 引数にdispatchをとり、propsを返すmapDispatchToProps関数
  ```
  const mapDispatchToProps = dispatch => ({
    functionName: args => dispatch(action(args)
  });
  ```
- connectの仕方
  ```
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(componentName);
  ```
### reducer
- stateとactionをもらい、newStateを返す
  ```
  const reducer = state => {
    ...
    return newState;
  };
  ```
- action毎にreducerを分け、combineReducersでreducerをまとめる
  ```
  export default combineReducers({
    reducer1,
    reducer2,
    ...
  });
  ```
- redux-actを利用すると、createReducerでreducerを生成できる
### store
- reducersを引数にとり、createStoreでstoreを生成する
  ```
  const store = createStore(reducer);
  ```
- Providerのpropにstoreを渡す
  ```
  <Provider store={store}>
  ```
