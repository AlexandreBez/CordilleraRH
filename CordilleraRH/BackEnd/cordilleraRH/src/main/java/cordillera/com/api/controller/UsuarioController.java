package cordillera.com.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import cordillera.com.api.model.components.Usuario;
import cordillera.com.api.model.container.UsuarioJPA;

@RestController
@RequestMapping("/mainhub/users")
public class UsuarioController {

    private final UsuarioJPA usuarioRepository;

    @Autowired
    public UsuarioController(UsuarioJPA usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    // findById
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Usuario findByIdUser(@PathVariable Integer id){
        return usuarioRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // Select all 
    @GetMapping()
    public List<Usuario> obterTodosUsuarios(){
        return usuarioRepository.findAll();
    }

    // Save 
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario salvarUsuario(@RequestBody @Valid Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateUsuario(@PathVariable Integer id, @RequestBody @Valid Usuario usuario){ 
    	usuarioRepository
                .findById(id)
                .map( usuarioExiste -> {
                	usuario.setId_usuario(usuarioExiste.getId_usuario());
                    usuarioRepository.save(usuario);
                    return usuarioExiste;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado") );
    }


    // delete    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaUsuario(@PathVariable Integer id){
        usuarioRepository
            .findById(id)
            .map( c -> { 
                usuarioRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuário não encontrado") 
            );
    }
}
