package cordillera.com.api.model.components;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.br.CNPJ;

@Entity
@Table(name = "EMPRESA")
public class Empresa{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_EMPRESA")
    private Integer id_empresa;

    @Column(name = "NOME")
    @NotNull(message = "{campo.nomeEmpresa.vazio}")
    private String nomeEmpresa;

    @CNPJ
    @Column(name = "CNPJ")
    @NotNull(message = "{campo.cnpj.vazio}")
    private String cnpj;

    // ------------------------------------

    @Column(name = "CEP")
    @NotNull(message = "{campo.cep.vazio}")
    private String cep;

    @Column(name = "PAIS")
    @NotNull(message = "{campo.pais.vazio}")
    private String pais;

    @Column(name = "ESTADO")
    @NotNull(message = "{campo.estado.vazio}")
    private String estado;

    @Column(name = "CIDADE")
    @NotNull(message = "{campo.cidade.vazio}")
    private String cidade;

    @Column(name = "RUA")
    @NotNull(message = "{campo.rua.vazio}")
    private String rua;

    @Column(name = "NUMERO")
    @NotNull(message = "{campo.numero.vazio}")
    private String numero;

    // ------------------------------------

    @Column(name = "CONTATO_CORPORATIVO")
    @NotNull(message = "{campo.email.vazio}")
    private String email; 

    @Column(name = "EMAIL_CORPORATIVO")
    @NotNull(message = "{campo.contato.vazio}")
    private String contato;

    public Empresa(){}

    public Empresa(Integer id_empresa, @NotNull(message = "{campo.nomeEmpresa.vazio}") String nomeEmpresa,
            @CNPJ @NotNull(message = "{campo.cnpj.vazio}") String cnpj,
            @NotNull(message = "{campo.cep.vazio}") String cep, @NotNull(message = "{campo.pais.vazio}") String pais,
            @NotNull(message = "{campo.estado.vazio}") String estado,
            @NotNull(message = "{campo.cidade.vazio}") String cidade,
            @NotNull(message = "{campo.rua.vazio}") String rua,
            @NotNull(message = "{campo.numero.vazio}") String numero,
            @NotNull(message = "{campo.email.vazio}") String email,
            @NotNull(message = "{campo.contato.vazio}") String contato) {
        this.id_empresa = id_empresa;
        this.nomeEmpresa = nomeEmpresa;
        this.cnpj = cnpj;
        this.cep = cep;
        this.pais = pais;
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
        this.email = email;
        this.contato = contato;
    }

    /**
     * @return Integer return the id_empresa
     */
    public Integer getId_empresa() {
        return id_empresa;
    }

    /**
     * @param id_empresa the id_empresa to set
     */
    public void setId_empresa(Integer id_empresa) {
        this.id_empresa = id_empresa;
    }

    /**
     * @return String return the nomeEmpresa
     */
    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    /**
     * @param nomeEmpresa the nomeEmpresa to set
     */
    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    /**
     * @return String return the cnpj
     */
    public String getCnpj() {
        return cnpj;
    }

    /**
     * @param cnpj the cnpj to set
     */
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    /**
     * @return String return the cep
     */
    public String getCep() {
        return cep;
    }

    /**
     * @param cep the cep to set
     */
    public void setCep(String cep) {
        this.cep = cep;
    }

    /**
     * @return String return the pais
     */
    public String getPais() {
        return pais;
    }

    /**
     * @param pais the pais to set
     */
    public void setPais(String pais) {
        this.pais = pais;
    }

    /**
     * @return String return the estado
     */
    public String getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado) {
        this.estado = estado;
    }

    /**
     * @return String return the cidade
     */
    public String getCidade() {
        return cidade;
    }

    /**
     * @param cidade the cidade to set
     */
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    /**
     * @return String return the rua
     */
    public String getRua() {
        return rua;
    }

    /**
     * @param rua the rua to set
     */
    public void setRua(String rua) {
        this.rua = rua;
    }

    /**
     * @return String return the numero
     */
    public String getNumero() {
        return numero;
    }

    /**
     * @param numero the numero to set
     */
    public void setNumero(String numero) {
        this.numero = numero;
    }

    /**
     * @return String return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return String return the contato
     */
    public String getContato() {
        return contato;
    }

    /**
     * @param contato the contato to set
     */
    public void setContato(String contato) {
        this.contato = contato;
    }

}