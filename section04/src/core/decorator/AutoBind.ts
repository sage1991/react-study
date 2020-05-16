

export function autoBind(target:any, methodName:string|symbol, descriptor:PropertyDescriptor) {
  const adjDescriptor:PropertyDescriptor = {
    configurable : true,
    enumerable : false,
    get() {
      return descriptor.value.bind(this);
    }
  }
  return adjDescriptor;
}
