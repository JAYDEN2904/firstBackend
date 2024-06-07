/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProducerWhereUniqueInput } from "./ProducerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProducerUpdateInput } from "./ProducerUpdateInput";

@ArgsType()
class UpdateProducerArgs {
  @ApiProperty({
    required: true,
    type: () => ProducerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProducerWhereUniqueInput)
  @Field(() => ProducerWhereUniqueInput, { nullable: false })
  where!: ProducerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProducerUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProducerUpdateInput)
  @Field(() => ProducerUpdateInput, { nullable: false })
  data!: ProducerUpdateInput;
}

export { UpdateProducerArgs as UpdateProducerArgs };
