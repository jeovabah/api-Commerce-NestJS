export class CreateProductDto {
  name: string;
  price: number;
  quantity?: number;
  description?: string;
  url_image: string;
}
