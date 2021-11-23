import { getRepository } from "typeorm";
import { Phone } from "../entities/Phone";

export const getList = async (take, skip) => {
  const productsRepository = getRepository(Phone);
  const total = await productsRepository.count();
  const products = await productsRepository.find({ take: take, skip: skip });
  return { total, products };
};

export const getDetail = async (id) => {
  const productsRepository = getRepository(Phone);
  const detailProduct = await productsRepository.findOne(id);
  return { detailProduct };
};
