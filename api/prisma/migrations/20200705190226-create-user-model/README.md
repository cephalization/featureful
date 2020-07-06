# Migration `20200705190226-create-user-model`

This migration has been generated at 7/5/2020, 7:02:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."User" (
"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT   )

CREATE UNIQUE INDEX "quaint"."User.email" ON "User"("email")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200705190226-create-user-model
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+datasource DS {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+model User {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+}
```


