import { SetMetadata } from "@nestjs/common"

export const ROLE='role_name'
export const RoleGuardCustom=(...roleNames:string[])=>SetMetadata(ROLE,roleNames)