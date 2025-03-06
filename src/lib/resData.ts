export class ResData<TData> {
  meta: Record<string, string | number | object>;
  constructor(
    status: number | string,
    message: string,
    public data: TData = null,
    meta: Record<string, string | number | object> = {},
  ) {
    this.meta = { status, message, ...meta };
  }
}
