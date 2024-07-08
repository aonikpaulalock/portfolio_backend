import { TExperince } from "./experince.interface";
import { Experince } from "./experince.model";




const createExperinceIntoDB = async (payload: TExperince) => {
  const result = await Experince.create(payload);
  return result
}

const getAllExperinceIntoDB = async () => {
  const result = await Experince.find();
  return result
}

export const ExperinceServices = {
  createExperinceIntoDB,
  getAllExperinceIntoDB
}