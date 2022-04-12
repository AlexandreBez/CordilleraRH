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

import cordillera.com.api.model.components.Empresa_Empregado;
import cordillera.com.api.model.container.Empresa_EmpregadoJPA;

@RestController
@RequestMapping("/mainhub/empresa_empregado")
public class Empresa_EmpregadoController {
    
    private final Empresa_EmpregadoJPA empresaEmpregadoRepository;

    @Autowired
    public Empresa_EmpregadoController(Empresa_EmpregadoJPA empresaEmpregadoRepository){
        this.empresaEmpregadoRepository = empresaEmpregadoRepository;
    }

    // try to find by ID of employee and if not find then throw a NOT_FOUND exception
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.FOUND)
    public Empresa_Empregado findByIdEmpresaEmpregado(@PathVariable Integer id){
        return empresaEmpregadoRepository.findById(id).orElseThrow( 
            () -> new ResponseStatusException(HttpStatus.NOT_FOUND)
        );
    };

    // Bring all the employes
    @GetMapping()
    public List<Empresa_Empregado> obterTodosEmpresaEmpregado(){
        return empresaEmpregadoRepository.findAll();
    }

    // Save employee
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Empresa_Empregado salvarEmpregado(@RequestBody @Valid Empresa_Empregado empresaEmpregado){
        return empresaEmpregadoRepository.save(empresaEmpregado);
    }

    // update
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEmpresaEmpregado(@PathVariable Integer id, @RequestBody @Valid Empresa_Empregado empresaEmpregado){ 
    	empresaEmpregadoRepository
                .findById(id)
                .map( empresaEmpregadoAtualizado -> {
                    empresaEmpregado.setId_EmpresaEmpregado((empresaEmpregadoAtualizado.getId_EmpresaEmpregado()));
                    empresaEmpregadoRepository.save(empresaEmpregado);
                    return empresaEmpregadoAtualizado;
                }).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Empresa/Empregado não encontrado") );
    }

    // delete 
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletaEmpregado(@PathVariable Integer id){
    	empresaEmpregadoRepository
            .findById(id)
            .map( c -> { 
            	empresaEmpregadoRepository.delete(c);
                return Void.TYPE;
            })
            .orElseThrow( 
            		() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Empresa/Empregado não encontrado") 
            );
    }
}