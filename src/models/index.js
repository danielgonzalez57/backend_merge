const { usersMergeSchema, UsersMerge } = require("./user.model");
const { invesMergeSchema, InvesMerge } = require("./investigacionDos.model");
const { maestroTiendaMergeSchema, MaestroTiendaMerge } = require("./maestroTienda.model");
const { tipoArticuloMergeSchema, TipoArticuloMerge } = require("./tipoArticulo.model");
const { tamCapMergeSchema, TamCapMerge } = require("./tamCap.model");
const { modeloMergeSchema, ModeloMerge } = require("./modelo.model");

function setupModels(sequelize) {

  UsersMerge.init(usersMergeSchema, UsersMerge.config(sequelize));
  InvesMerge.init(invesMergeSchema, InvesMerge.config(sequelize));
  MaestroTiendaMerge.init(maestroTiendaMergeSchema, MaestroTiendaMerge.config(sequelize));
  TipoArticuloMerge.init(tipoArticuloMergeSchema, TipoArticuloMerge.config(sequelize));
  TamCapMerge.init(tamCapMergeSchema, TamCapMerge.config(sequelize));
  ModeloMerge.init(modeloMergeSchema, ModeloMerge.config(sequelize));

module.exports = setupModels;
