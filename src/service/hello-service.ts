import { Response } from "../helper/response-helper"
import { Validation } from "../helper/validation-helper"
import { CreateHelloRequest } from "../model/hello-model"
import { HelloRepository } from "../repository/hello-repository"
import { HelloValidation } from "../validation/hello-validation"

export class HelloService {
  protected static helloRepository: HelloRepository = new HelloRepository()

  static menyapa() {
    return Response.toJson(
      true,
      "Hi, Sukses ngejalanin API nih! dari template express-ts-template by Arief Rachman Hakim :D",
    )
  }

  static getSapaan() {
    return Response.toJson(
      true,
      "Sukses mendapatkan sapaan",
      this.helloRepository.getSapaan(),
    )
  }

  static addSapaan(request: CreateHelloRequest) {
    const addSapaanRequest = Validation.validate(
      HelloValidation.CREATE,
      request,
    )

    const { word } = addSapaanRequest
    const sapaan = this.helloRepository.addSapaan(word)

    return Response.toJson(true, "Sukses menambahkan sapaan", sapaan)
  }
}
