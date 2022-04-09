package cordillera.com.api.model.container;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import cordillera.com.api.model.components.Empregado;

public interface EmpregadoJPA extends JpaRepository<Empregado, Integer>{
    
    // @Query(value = "select e, CPF from Empregado e where e like '%:e.nome%'")
    // public List<Empregado> acharPorNome(@Param("nome") String nome);

    // @Query(value = "select NOME, e from Empregado e where e like '%:e.CPF%'")
    // public List<Empregado> acharPorCPF(@Param("CPF") String CPF);
    
}