package com.cordillerarh.api.model.components;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "USUARIO")
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USUARIO")
    private Integer id_usuario;

    @Column(name = "USER")
    @Email(message = "{campo.email.vazio}")
    private String user;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "ROLE")
    @NotNull(message = "{campo.role.vazio}")
    private String role;

    public Usuario(){}

    public Usuario(Integer id_usuario, String user, String password,
            @NotNull(message = "{campo.role.vazio}") String role) {
        this.id_usuario = id_usuario;
        this.user = user;
        this.password = password;
        this.role = role;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}