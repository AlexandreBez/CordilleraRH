package cordillera.com.api.model.container;

import org.springframework.data.jpa.repository.JpaRepository;

import cordillera.com.api.model.components.Usuario;

public interface UsuarioJPA extends JpaRepository<Usuario, Integer>{
    
}