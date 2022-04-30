package com.cordillerarh.api.model.container;

import com.cordillerarh.api.model.components.Usuario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UsuarioJPA extends JpaRepository<Usuario, Integer>{
 
	@Query("select u from Usuario u where u.user like %:user%")
	public List<Usuario> findByUser(@Param("user") String user);
	
}