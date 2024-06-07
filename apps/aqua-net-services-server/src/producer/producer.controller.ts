import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProducerService } from "./producer.service";
import { ProducerControllerBase } from "./base/producer.controller.base";

@swagger.ApiTags("producers")
@common.Controller("producers")
export class ProducerController extends ProducerControllerBase {
  constructor(
    protected readonly service: ProducerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
