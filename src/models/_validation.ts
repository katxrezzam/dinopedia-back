import Article from "./Article"
import Asset from "./Asset"
import Dinosaur from "./Dinosaur"
import Section from "./Section"

//
Article.hasMany(Section, { foreignKey: 'article_id' })
Section.belongsTo(Article, { foreignKey: 'article_id' })
//

Section.hasMany(Asset, { foreignKey: 'section_id' })
Asset.belongsTo(Section, { foreignKey: 'section_id'})
//
Dinosaur.belongsTo(Article,{ foreignKey: 'article_id' })
Article.hasOne(Dinosaur,{ foreignKey: 'article_id' })