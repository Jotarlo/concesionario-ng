import { BrandModel } from "./brand.model";
import { CategoryModel } from "./category.model";
import { PhotoModel } from "./photo.model";

export class VehicleModel {
    id?: number;
    color?: string;
    modelo?: number;
    serie_chasis?: string;
    serie_motor?: string;
    precio?: number;
    descuento?: number;
    estado?: number;
    id_marca?: number;
    categorias?: CategoryModel[];
    fotos?: PhotoModel[];
    id_proveedor?: number;
    marca?: BrandModel;
    foto_principal?: string;
}