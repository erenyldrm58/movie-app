import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from '../MovieList';

class MoviesPage extends Component {
    static propTypes={
        movies : PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <h2>EREN Movie </h2>
                <MovieList movies ={this.props.movies} ></MovieList>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos quidem esse nemo ea? Reprehenderit, ut. Aspernatur fuga quibusdam eveniet optio doloremque, commodi illum voluptatem necessitatibus nemo dolorem reprehenderit unde!
                Hic explicabo illum iure excepturi, quam voluptate repellendus deserunt pariatur esse eos! Dolore obcaecati incidunt modi omnis recusandae suscipit quis cum sit corrupti accusamus numquam quia, harum, optio velit maxime!
                Inventore sequi distinctio illum tenetur non facilis, quisquam, temporibus numquam quo reiciendis amet ipsa molestias ducimus aliquam nisi hic. Veniam rem accusamus sapiente libero exercitationem impedit voluptatem veritatis laudantium iusto?
                Natus beatae suscipit deserunt ipsum repudiandae dignissimos? Quibusdam optio facilis eos libero cupiditate nobis fuga iure illo asperiores quo, quae maiores porro quam repellendus, ea deserunt, nulla aliquam odio minus?
                Id voluptatum voluptatem eveniet beatae, placeat sint quibusdam molestiae explicabo impedit labore aperiam culpa neque natus totam, minima quaerat praesentium quae maiores alias doloribus suscipit? Aliquam doloribus saepe labore sed.
                At obcaecati ea est fugit consequuntur natus atque odio. Esse facere error dolor obcaecati delectus porro repellendus aspernatur molestias minima earum possimus ratione excepturi cum, assumenda impedit doloremque quaerat officia!
                Hic quasi consequatur ullam! Temporibus voluptatibus consequuntur nam optio deleniti ab, rerum quae. Velit, commodi? Tenetur, molestiae, similique aliquam ipsam fugiat cum molestias laborum ducimus ullam quas qui repellat sint!
                Quia fuga, amet commodi assumenda vero cum magnam. Architecto provident nulla fugiat tenetur repellendus! Id vitae repellendus voluptatibus soluta explicabo facere beatae tempora incidunt minima pariatur, veritatis numquam fugiat consectetur?
                Tempora nemo vero, cum similique eos facere nostrum porro nam veniam, maiores sint culpa. Asperiores, provident error? Fugit et similique, perspiciatis commodi, id quo magnam provident ut nesciunt, eos quis!
                Modi iusto sed ad quisquam pariatur eius doloribus sit quas, dolorem enim cum ipsam consequatur vitae necessitatibus, quos nobis aspernatur? Laudantium nisi voluptates autem. Odit, impedit. Odit dolorum temporibus rerum.
                Blanditiis rerum pariatur quas dolorem ex, labore consequatur quos, ad repudiandae consectetur in facere corrupti ullam atque iusto nihil, tempora ipsam. Corrupti eum quis aut nisi incidunt nostrum, officia odio.
                Voluptatibus consequuntur temporibus et laudantium ullam rem architecto perspiciatis animi maxime placeat alias sapiente minima debitis illo eveniet quis repellat, quam quasi. Fugit, aspernatur. Possimus laborum ab error debitis quo.
                Perspiciatis quaerat molestias, praesentium quibusdam ut fugiat, tenetur accusantium animi provident totam molestiae nesciunt nostrum voluptas dicta ea neque! Praesentium, sed necessitatibus fuga dignissimos cupiditate sunt possimus ex quas quidem.
                Assumenda expedita corrupti, mollitia corporis voluptate rerum deleniti laborum facere consequuntur quae repudiandae quisquam. Itaque expedita asperiores sequi dolor dicta atque alias, iste temporibus unde distinctio hic veniam, libero dolores?
                Delectus nostrum ea facilis fuga mollitia blanditiis placeat, cupiditate ipsam laboriosam nisi ratione facere at dolorem! Nostrum atque totam tempore molestiae distinctio laborum vero quo laudantium incidunt? Id, eos ipsum.
                Ipsam numquam placeat perspiciatis praesentium quas iusto tenetur alias. Quo id neque velit quasi dolores, consequatur nulla saepe fuga officiis blanditiis ipsam reprehenderit, iure necessitatibus optio quaerat voluptatum, ab sunt!
                Voluptatem quibusdam cum alias? Dolore, exercitationem hic quia repellat enim non vel earum doloribus, commodi similique eius praesentium. Quo neque reiciendis non libero aliquid maiores veniam doloremque tempora molestiae provident?
                Molestiae voluptate, aliquid atque laborum nostrum labore alias impedit voluptates unde officiis voluptatem accusantium iure numquam voluptatum at saepe, quasi, molestias eaque! Ipsa in corrupti voluptatum accusantium, quaerat soluta distinctio!
                Consequatur culpa velit amet, corporis quod pariatur voluptas. Nostrum doloribus provident quaerat numquam ratione eligendi inventore similique alias quae, ex ea dolor ipsa optio deleniti animi magnam consequuntur, repellendus voluptatum?
                Sequi ea ullam soluta in quidem vel debitis ab. Aliquam iure expedita provident nemo doloremque perferendis soluta. Sunt quos amet dolorem provident a id sapiente porro praesentium? Architecto, at fugiat.            
                       
            </div>
        )
    }
}

const mapStateProps = (state) =>
{
    return { 
        movies: state.movies
    };
}

export default connect(mapStateProps)(MoviesPage);