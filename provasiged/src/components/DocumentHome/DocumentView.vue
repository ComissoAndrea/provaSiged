<template>
  <n-data-table :columns="columns" :data="data" :row-props="rowProps" />
</template>

<script setup lang="ts">
import { type Document , documenti} from "../../documents";
import { defineComponent, ref, h } from "vue";
import {
  NSpace,
  NDataTable,
  type DataTableColumns,
  NButton,
  useMessage,
} from "naive-ui";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { router } from "@/router/routes";

const data = documenti

const route = useRouter();
function submit(route: string) {
  console.log("pino");
  router.push(route);
}

const columns = [
{
    title: "id",
    key: "id",
  },
  {
    title: "name",
    key: "name",
  },
  {
    title: "destinatario",
    key: "destinatario",
  },
  {
    title: "oggetto",
    key: "oggetto",
  },
  {
    title: "stato",
    key: "stato",
  },
];

const rowProps = (row: Document) => {
  console.log(row.stato);
  return {
    onClick: () => {
      submit(`/document_detail_id/${row.id}`);
    },
  };
};

defineComponent({
  setup() {
    return {
      rowProps,
      columns,
      data,
    };
  },
});
</script>

<style>
.custom-table {
  border-collapse: collapse;
  margin-right: 100px;
}

.custom-table-row:nth-child(even) {
  background-color: #f7f7f7;
}

.custom-table-row:hover {
  background-color: #e0e0e0;
}

.custom-table-cell,
.custom-table-header-cell {
  padding: 8px;
  border: 1px solid #ccc;
}

.custom-table-header-cell {
  font-weight: bold;
  background-color: #f0f0f0;
}
</style>
