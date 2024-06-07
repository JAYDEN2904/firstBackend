import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProducerModuleBase } from "./base/producer.module.base";
import { ProducerService } from "./producer.service";
import { ProducerController } from "./producer.controller";
import { ProducerResolver } from "./producer.resolver";

@Module({
  imports: [ProducerModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProducerController],
  providers: [ProducerService, ProducerResolver],
  exports: [ProducerService],
})
export class ProducerModule {}
